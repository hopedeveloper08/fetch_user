import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <ul className="user-email">
          {this.props.data.map((user) => {
            return (
              <Link key={user.id} to={`user-info/${user.id}`}>
                <li>{user.email}</li>
              </Link>
            );
          })}
        </ul>
      </>
    );
  }
}
