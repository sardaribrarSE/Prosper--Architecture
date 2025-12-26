export interface WorkItem {
  id: number;
  service_id: number | null;
  type_id: number | null;
  title: string;
  location: string;
  area: string;
  year: string;
  // API provides a gallery array; we primarily use the first image for the card.
  gallery?: {
    id: number;
    work_project_id: number;
    image: string;
  }[];

  // Derived fields we compute on the server for easier rendering.
  thumbnail?: string | null;
  serviceTitle?: string | null;
  typeTitle?: string | null;
}

export interface TaxonomyItem {
  id: number;
  title: string;
  slug: string;
}

export interface WorkListingResponse {
  status: boolean;
  code: number;
  message: string;
  data: {
    service: TaxonomyItem[];
    type: TaxonomyItem[];
    work_all: WorkItem[];
    // API also returns a featured list alongside the full list.
    work_feature?: WorkItem[];
  };
}


