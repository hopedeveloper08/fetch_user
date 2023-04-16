import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQuery } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import fetchData from "./fetch";
import Loading from "./loading";
import Information from "./info";

function App() {
  const { data, error, isError, isLoading } = useQuery("get", fetchData);

  if (!isError) {
    if (!isLoading) {
      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home data={data} />} />
              <Route path="user-info/:id" element={<Information />} />
            </Routes>
          </BrowserRouter>
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

export default App;
