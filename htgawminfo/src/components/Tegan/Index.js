import React from "react";
import "./style.css";
import TPic from "../images/tegan.jpg";

const Form = props => {
    return (
        <form>
            <h2>Tegan</h2>
            <img src={TPic} alt="tegan Pic"/>
            <list>
                <li>
                    <ul>Real Name: Tegan Prive</ul>
                    <ul>Occupation: Attorney, Managing Partner at Caplan and Gold</ul>
                    <ul>Origin: USA</ul>
                    <ul>Alignment: Positive </ul>
                    <ul>Status: Alive</ul>
                    <ul>Age: 37 (at around Season 6)</ul>
                    <ul>Birth Year: 1980s</ul>
                    <ul>Race/Ethnicity: Black/African-American</ul>
                    <ul>Sexual Orientation: Lesbian</ul>
                    <ul>Episode Count: 37</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;