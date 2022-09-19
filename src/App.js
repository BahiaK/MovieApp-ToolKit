import React, { useState } from "react";
import "./App.css";
import data from "./data";
import MovieList from "./Component/MovieList";
import Add from "./Component/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import  Filtre  from "./Component/Filtre";
import { Route, Router, Routes } from "react-router-dom";
import Edit from "./Component/Edit";

function App() {
  // const [movies, setMovies] = useState(data)
  // const handelAdd = (newf) => {
  //   setMovies([...movies, { ...newf, _id: movies.length }]);
  // };
  const [searchtitle, setSearchtitle] = useState("");
  const [searchrating, setSearchrating] = useState("");
  const filtreName = (searchtitle) => {
    setSearchtitle(searchtitle);
  };
  const filtreRating = (searchrating) => {
    setSearchrating(searchrating);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div><Add /><Filtre filtreName={filtreName} filtreRating={filtreRating} /><MovieList />
        </div>}/>
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>

    </div>

  );
}

export default App;
