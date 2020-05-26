import React, { useEffect, useCallback } from "react";
import { observer } from "mobx-react-lite";
import useStore from "./hooks/use-store";
import UserList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App() {
  console.log("APP_RENDER");
  const { uiStore, userStore } = useStore();

  const onSelectedUser = useCallback(
    (id: number) => {
      console.log("ON_SELECTED_USER_CALLED");
      userStore.fetchUserDetails(id);
    },
    [userStore]
  );

  // const onSelectedUser = (id: number) => {
  //   console.log("ON_SELECTED_USER_CALLED");
  //   userStore.fetchUserDetails(id);
  // };

  useEffect(() => {
    console.log("APP_USE_EFFECT_RUN");
    userStore.fetchUser();
  }, [userStore]);

  return (
    <div className="app">
      <UserList
        users={userStore.users}
        onSelectedUser={onSelectedUser}
        loading={uiStore.isLoading}
      />
      {uiStore.showDetails && (
        <UserDetails
          user={userStore.user}
          loading={uiStore.isFetchingDetails}
        />
      )}
    </div>
  );
}

export default observer(App);
