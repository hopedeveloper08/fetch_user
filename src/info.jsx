import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import React from "react";
import fetchData from "./fetch";
import Loading from "./loading";
import { Link } from "react-router-dom";

export default function Information() {
  const { data, error, isError, isLoading } = useQuery("get", fetchData);
  const { id } = useParams();
  let user = data.filter((userId) => userId.id == id)[0];

  if (!isError) {
    if (!isLoading) {
      return (
        <>
          <div className="information">
            <div className="id">{user.id}</div>
            <ul>
              <li className="info">
                <span>name</span> <span>{user.name}</span>
              </li>
              <li className="info">
                <span>email</span> <span>{user.email}</span>
              </li>
              <li className="date">
                email verified at {user.email_verified_at.slice(0, 10)} at{" "}
                {user.email_verified_at.slice(11, 19)}
              </li>
              <li className="date">
                created at {user.created_at.slice(0, 10)} at{" "}
                {user.created_at.slice(11, 19)}
              </li>
              <li className="date">
                updated at {user.updated_at.slice(0, 10)} at{" "}
                {user.updated_at.slice(11, 19)}
              </li>
            </ul>

            <Link to="/">
              <div className="btn-to-home">BACK TO HOME</div>
            </Link>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Loading />
        </>
      );
    }
  } else {
    return <h1>{error}</h1>;
  }
}
