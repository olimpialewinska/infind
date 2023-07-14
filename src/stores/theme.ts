import { makeObservable, observable, observe } from "mobx";

export class Theme {
  public currentTheme: "dark" | "light" = "dark";

  constructor() {
    makeObservable(this, {
      currentTheme: observable,
    });

    observe(this, "currentTheme", () => {
      document.body.style.backgroundColor =
        this.currentTheme === "dark" ? "#242526" : "#fff";
    });
  }

  public setTheme(theme: "dark" | "light") {
    this.currentTheme = theme;
  }
}
