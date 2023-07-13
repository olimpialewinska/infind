import { makeObservable, observable } from "mobx";

export class Theme {
  public currentTheme: "dark" | "light" = "dark";

  constructor() {
    makeObservable(this, {
      currentTheme: observable,
    });
  }

  public setTheme(theme: "dark" | "light") {
    this.currentTheme = theme;
  }
}
