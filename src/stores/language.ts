import { makeObservable, observable } from "mobx";

export class Language {
  public currentLanguage: string = "en";

  constructor() {
    makeObservable(this, {
      currentLanguage: observable,
    });
  }

  public setLanguage(language: string) {
    this.currentLanguage = language;
  }
}
