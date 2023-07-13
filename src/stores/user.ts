import { IUser } from "@/app/utils/interfaces/IUser";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { makeObservable, observable } from "mobx";

export class UserStore {
  public currentUserStore: IUser = {
    id: "",
    name: "",
  };

  constructor() {
    makeObservable(this, {
      currentUserStore: observable,
    });
  }

  public async init() {
    const supabase = createClientComponentClient();
    const { data } = await supabase.auth.getUser();
    if (data) {
      this.currentUserStore = {
        id: data.user!.id,
        name: data.user?.email!,
      };
    }
  }
}
