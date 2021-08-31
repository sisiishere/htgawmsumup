import React from "react";
import Navbar from "../components/Navbar/Index";
import Header from "../components/Header/Index";
import M from "../components/Minor/Index";
import Sidenote from "../components/Sidenote/Index";
import Footer from "../components/Footer/Index";
import { Link } from "react-router-dom";

const Minor = props => {
  return (
    <div>
      <Navbar>
        <Link to={"/Main"}></Link>
        <Link to={"/Annalise"}></Link>
        <Link to={"/Asher"}></Link>
        <Link to={"/Bonnie"}></Link>
        <Link to={"/Connor"}></Link>
        <Link to={"/Emmett"}></Link>
        <Link to={"/Eve"}></Link>
        <Link to={"/Frank"}></Link>
        <Link to={"/Gabriel"}></Link>
        <Link to={"/Laurel"}></Link>
        <Link to={"/Mikayla"}></Link>
        <Link to={"/Nate"}></Link>
        <Link to={"/Oliver"}></Link>
        <Link to={"/Rebecca"}></Link>
        <Link to={"/Tegan"}></Link>
        <Link to={"/Wes"}></Link>
        <Link to={"/Supporting"}></Link>
        <Link to={"/Minor"}></Link>
      </Navbar>
      <Header />
      <M />
      <Sidenote />
      <Footer />
    </div>
  );
};

export default Minor;