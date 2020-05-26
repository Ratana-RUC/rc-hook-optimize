import React, { memo } from "react";
import { IUser } from "../stores/user.store";
import Loading from "./Loading";

const UserDetails: React.FC<{ user: IUser; loading: boolean }> = ({
  user,
  loading,
}) => {
  console.log("USER_DETIALS_RENDER");
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div style={{ marginTop: 20 }}>
        <>
          <h4>{user.name}</h4>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </>
      </div>
    );
  }
};
export default memo(UserDetails);
