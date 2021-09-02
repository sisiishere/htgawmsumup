import React from "react";
import "./style.css";
import APic from "../images/asher.jpg";

const Form = props => {
    return (
        <form>
            <h2>Asher</h2>
            <img src={APic} alt="Asher Pic"/>
            <list>
            <li>
                    <ul>Real Name: Asher Millstone</ul>
                    <ul>Occupation: Middleton Law Student, DA's Office Intern</ul>
                    <ul>Origin: Philadelphia, Pennsylvania, USA</ul>
                    <ul>Alignment: Positive </ul>
                    <ul>Status: Deceased (from being stabbed by FBI Agent on Xavier Castillo's behalf)</ul>
                    <ul>Age: 28 (at the time of death)</ul>
                    <ul>Birth Year: 1991</ul>
                    <ul>Race/Ethnicity: White/European-American</ul>
                    <ul>Sexual Orientation: Straight</ul>
                    <ul>Episode Count: 86</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;