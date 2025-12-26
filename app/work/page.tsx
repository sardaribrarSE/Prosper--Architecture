import WorkList from "../../components/work/WorkList";
import {
  buildWorkItemsWithDerivedFields,
  fetchWorkListing,
} from "../../lib/work/api";

export default async function WorkPage() {
  const response = await fetchWorkListing();
 // console.log("🚀 ~ WorkPage ~ response:", response)
  const { all: items, featured } = buildWorkItemsWithDerivedFields(response);
  
  return (
    <div className="min-h-screen bg-primary-700 px-20 py-5">
      <main className=" ">
        <section className="mt-28">
          <WorkList allItems={items} featuredItems={featured} />
        </section>
      </main>
    </div>
  );
}
