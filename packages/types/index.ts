export type Document = {
  id: string;
  certainty?: number;
  title: string;
  body: string;
};

export type RawDocument = {
  title: string;
  body: string;
  _additional: {
    id: string;
    certainty?: number;
    generate?: {
      groupedResult?: string;
      error?: string;
    };
  };
};
