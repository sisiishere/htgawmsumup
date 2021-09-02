import React from "react";
import "./style.css";
import EMPic from "../images/emmett.jpg";

const Form = props => {
    return (
        <form>
            <h2>Emmett</h2>
            <img src={EMPic} alt="Emmett Pic"/>
            <list>
            <li>
                    <ul>Real Name: Emmett Crawford</ul>
                    <ul>Occupation: Managing Partner at Caplan and Gold</ul>
                    <ul>Origin:  USA</ul>
                    <ul>Alignment: Positive </ul>
                    <ul>Status: Deceased (from heart attack?)</ul>
                    <ul>Age: 50s(at January 2017)</ul>
                    <ul>Birth Year: 1960s</ul>
                    <ul>Race/Ethnicity: White/European-American</ul>
                    <ul>Sexual Orientation: Straight</ul>
                    <ul>Episode Count: 12</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;