import React from "react";
import "./style.css";
import CPic from "../images/connor.jpg";

const Form = props => {
    return (
        <form>
            <h2>Connor</h2>
            <img src={CPic} alt="Connor Pic"/>
            <list>
            <li>
                    <ul>Real Name: Connor Morgan Walsh</ul>
                    <ul>Occupation: Middleton Law Student</ul>
                    <ul>Origin: Michigan, USA</ul>
                    <ul>Alignment: Neutral </ul>
                    <ul>Status: Alive</ul>
                    <ul>Age: 26 (at around Season 4)</ul>
                    <ul>Birth Year: 1990?</ul>
                    <ul>Race/Ethnicity: White/European-American</ul>
                    <ul>Sexual Orientation: Gay</ul>
                    <ul>Episode Count: 90</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;