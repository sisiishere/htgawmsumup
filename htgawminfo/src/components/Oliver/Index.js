import React from "react";
import "./style.css";
import OPic from "../images/oliver.jpg";

const Form = props => {
    return (
        <form>
            <h2>Oliver</h2>
            <img src={OPic} alt="oliver Pic"/>
            <list>
                <li>
                    <ul>Real Name: Oliver Hampton</ul>
                    <ul>Occupation: Computer Technician, Hacker</ul>
                    <ul>Origin: Philadelphia, Pennsylvania, USA</ul>
                    <ul>Alignment: Positive </ul>
                    <ul>Status: Alive</ul>
                    <ul>Age: 30 (at around Season 1)</ul>
                    <ul>Birth Year: 1984?</ul>
                    <ul>Race/Ethnicity: Asian-American</ul>
                    <ul>Sexual Orientation: Gay</ul>
                    <ul>Episode Count: 82</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;