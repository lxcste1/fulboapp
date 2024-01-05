import type {Match} from "./types";

const api = {
  match: {
    list: async (): Promise<Match[]> => {
      return fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRbViefWt72MuVe9fs3ZJ_ursK6d21dYi064a_nPqXypz60Qxym9EhY_Jj-91XwO7dc7tyHoJLlJuVY/pub?output=tsv",
      )
        .then((res) => res.text())
        .then((text) => {
          return text
            .split("\n")
            .slice(1)
            .map((row) => {
              const [] = row.split("\t");
            });
        });
    },
  },
};

export default api;
