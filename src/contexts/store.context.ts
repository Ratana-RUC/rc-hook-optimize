import React from "react";
import UIStore from "../stores/ui.store";
import UserStore from "../stores/user.store";

const uiStore = new UIStore();
const userStore = new UserStore(uiStore);

const storesContext = React.createContext({
  uiStore: uiStore,
  userStore: userStore,
});

export default storesContext;
