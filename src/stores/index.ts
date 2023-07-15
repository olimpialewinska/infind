import { configure } from "mobx";
import { Language } from "./language";
import { Theme } from "./theme";
import { User } from "./user";

configure({ enforceActions: "never" });

export class Store {
  public language = new Language();
  public theme = new Theme();
  public user = new User();

  constructor() {
    this.init();
  }

  private async init() {
    await this.user.init();
  }
}

export const store = new Store();
