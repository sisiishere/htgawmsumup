import React from "react";
import "./style.css";
import LPic from "../images/laurel.jpg";

const Form = props => {
    return (
        <form>
            <h2>Laurel</h2>
            <img src={LPic} alt="Laurel Pic"/>
            <list>
                <li>
                    <ul>Real Name: Laurel Cstillo</ul>
                    <ul>Occupation: Law Professor, Defense Attorney</ul>
                    <ul>Origin: Born in Mexico, raised in Florida, USA</ul>
                    <ul>Alignment: Positive </ul>
                    <ul>Status: Alive</ul>
                    <ul>Age: 27 (as of Season 3)</ul>
                    <ul>Birth Year: 1988</ul>
                    <ul>Race/Ethnicity: Latinx/Hipanic</ul>
                    <ul>Sexual Orientation: Straight</ul>
                    <ul>Episode Count: 78</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;