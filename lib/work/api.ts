import { WorkItem, WorkListingResponse } from "./types";

const WORK_LISTING_URL =
  "https://panel.prosperarchitects.com/public/api/work/listing";

export async function fetchWorkListing(): Promise<WorkListingResponse> {
  const res = await fetch(WORK_LISTING_URL, {
    next: { revalidate: 60 }, // cache for 1 minute, adjust as needed
  });

  if (!res.ok) {
    throw new Error("Failed to fetch work listing");
  }

  const json = (await res.json()) as WorkListingResponse;
  //console.log("🚀 ~ fetchWorkListing ~ json:", json)

  if (!json.status || !json.data) {
    throw new Error("Unexpected work listing response");
  }

  return json;
}

export function buildWorkItemsWithDerivedFields(response: WorkListingResponse) {
  const {
    data: { service, type, work_all, work_feature },
  } = response as WorkListingResponse & { data: { work_feature?: WorkItem[] } };

  const serviceLookup = Object.fromEntries(
    service.map((item) => [item.id, item.title] as const),
  ) as Record<number, string>;

  const typeLookup = Object.fromEntries(
    type.map((item) => [item.id, item.title] as const),
  ) as Record<number, string>;

  const derive = (item: WorkItem) => ({
    ...item,
    thumbnail: item.gallery?.[0]?.image ?? null,
    serviceTitle: item.service_id ? serviceLookup[item.service_id] ?? null : null,
    typeTitle: item.type_id ? typeLookup[item.type_id] ?? null : null,
  });

  const all = work_all.map(derive);
  const featured = (work_feature ?? []).map(derive);

  return { all, featured } as { all: WorkItem[]; featured: WorkItem[] };
}


