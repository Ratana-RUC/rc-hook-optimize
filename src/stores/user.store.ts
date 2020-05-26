import { observable, action } from "mobx";
import axios from "axios";
import UIStore from "./ui.store";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default class UserStore {
  @observable users: IUser[];
  @observable user: IUser;

  uiStore: UIStore;

  constructor(uiStore: UIStore) {
    this.uiStore = uiStore;
  }

  @action setUsers(users: IUser[]) {
    this.users = users;
  }
  @action setUser(user: IUser) {
    this.user = user;
  }

  @action async fetchUser() {
    console.log("FECTCH_USER_CALLED");
    try {
      this.uiStore.setIsLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      if (res.status === 200) this.setUsers(res.data);
      this.uiStore.setIsLoading(false);
    } catch (err) {
      console.log("error: ", err.message);
    }
  }
  @action async fetchUserDetails(id: number) {
    console.log("FECTCH_USER_DETAILS_CALLED");
    try {
      this.uiStore.setShowDetails(true);
      this.uiStore.setIsFetchingDetails(true);
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (res.status === 200) {
        this.setUser(res.data);
      }
      this.uiStore.setIsFetchingDetails(false);
    } catch (err) {
      console.log("error: ", err.message);
    }
  }
}
