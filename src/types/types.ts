export interface bulaTypes {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: [
    {
      id: string;
      expedient: string;
      type: string;
      url: string;
    },
    {
      id: string;
      expedient: string;
      type: string;
      url: string;
    }
  ];
  active_principles: [
    {
      id: string;
      name: string;
    }
  ];
}

export interface iPages {
  first: number | null;
  items: number | null;
  last: number | null;
  next: number | null;
  pages: number | null;
  prev: number | null;
}
