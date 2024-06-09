export type Content = {
  name: string;
  "poster-image": string;
};

export type Page = {
  "content-items": { content: Array<Content> };
  "page-num-requested": string;
  "page-size-requested": string;
  "page-size-returned": string;
  title: string;
  "total-content-items": string;
};

export type ApiResponse = {
  page: Page;
};

export type DataResponse = {
  content: Array<Content>;
  pageNo: number;
  title: string;
  itemsReturned: number;
  totalItems: number;
};
