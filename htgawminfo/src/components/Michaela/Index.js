import React from "react";
import "./style.css";
import MPic from "../images/michaela.jpg";

const Form = props => {
    return (
        <form>
            <h2>Michaela</h2>
            <img src={MPic} alt="michaela Pic"/>
            <list>
                <li>
                    <ul>Real Name: Michaela Pratt</ul>
                    <ul>Occupation: Middleton Law Student, Judge</ul>
                    <ul>Origin: Philadelphia, Pennsylvania, USA</ul>
                    <ul>Alignment: Positive </ul>
                    <ul>Status: Alive</ul>
                    <ul>Age: 32 (at around 2020)</ul>
                    <ul>Birth Year: 1987</ul>
                    <ul>Race/Ethnicity: Black/African-American</ul>
                    <ul>Sexual Orientation: Straight</ul>
                    <ul>Episode Count: 90</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;