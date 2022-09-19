import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <li key={Math.random().toString()}>
              {user.username} ({user.age} years old)
            </li>
          ))
        ) : (
          <h2>No User Added</h2>
        )}
      </ul>
    </Card>
  );
};

export default UsersList;
