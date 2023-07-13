import { configure } from "mobx";
import { Language } from "./language";
import { Theme } from "./theme";

configure({ enforceActions: "never" });

export class Store {
  public language = new Language();
  public theme = new Theme();
}

export const store = new Store();
