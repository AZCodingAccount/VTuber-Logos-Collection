import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Neovim: IBrand = {
  name: "Neovim",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Neovim/NeovimLogo.png",
      credit: getCredit(Author.Aikoyori),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/Aikoyori/ProgrammingVTuberLogos/main/Neovim/NeovimShadowed.png",
      credit: getCredit(Author.Aikoyori),
      type: "shadowed",
    },
  ],
};
