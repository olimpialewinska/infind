import { IUser } from "@/utils/interfaces/IUser";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { makeObservable, observable } from "mobx";

export class User {
  public currentUserStore: IUser | undefined = undefined;

  constructor() {
    makeObservable(this, {
      currentUserStore: observable,
    });
  }

  public async init() {
    const supabase = createClientComponentClient();
    const { data } = await supabase.auth.getUser();
    if (!data.user) return;

    this.currentUserStore = {
      id: data.user!.id,
      email: data.user!.email!,
    };
  }
}
