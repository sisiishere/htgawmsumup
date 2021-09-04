import React from "react";
import "./style.css";
import GPic from "../images/gabriel.jpg";

const Form = props => {
    return (
        <form>
            <h2>Gabriel</h2>
            <img src={GPic} alt="Gabriel Pic"/>
            <list>
                <li>
                    <ul>Real Name: Gabriel Vincent Maddox</ul>
                    <ul>Occupation: Middleton Law Student, Activist</ul>
                    <ul>Origin: Chicago, Illinois, USA</ul>
                    <ul>Alignment: Positive </ul>
                    <ul>Status: Alive</ul>
                    <ul>Age: 20s</ul>
                    <ul>Birth Year: 1994</ul>
                    <ul>Race/Ethnicity: Biracial (Black and White)</ul>
                    <ul>Sexual Orientation: Straight</ul>
                    <ul>Episode Count: 31</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;