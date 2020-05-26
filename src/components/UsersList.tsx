import React, { memo } from "react";
import { IUser } from "../stores/user.store";
import Loading from "./Loading";

export interface IUserListProps {
  users: IUser[];
  loading?: boolean;
  onSelectedUser: (id: number) => void;
}

const UserList: React.FC<IUserListProps> = ({
  users,
  loading,
  onSelectedUser,
}) => {
  console.log("USER_LIST_RENDER...");
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="user-container">
        <ol className="user-list">
          {users.map((user) => (
            <li
              key={user.id}
              onClick={onSelectedUser.bind(null, user.id)}
              className="user-list-item"
            >
              {user.name}
            </li>
          ))}
        </ol>
      </div>
    );
  }
};

export default memo(UserList);
