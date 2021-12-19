import create from "zustand";

interface queryDataProp {
  year?: number;
  season?: string;
  genreId?: number;
}

interface searchQueryProps {
  componentName: string | null;
  queryData: queryDataProp | null;
  seasonSearch: (year: number, season: string) => void;
  genreSearch: (genreId: number) => void;
  reset: () => void;
}

export const searchQueryStore = create<searchQueryProps>((set) => ({
  componentName: null,
  queryData: null,
  seasonSearch: (year, season) =>
    set((state) => ({
      componentName: "seasonSearch",
      queryData: {
        year: year,
        season: season,
      },
    })),
  genreSearch: (genreId: number) =>
    set((state) => ({
      componentName: "genreSearch",
      queryData: {
        genreId: genreId,
      },
    })),
  reset: () =>
    set((state) => ({
      componentName: null,
      queryData: null,
    })),
}));
