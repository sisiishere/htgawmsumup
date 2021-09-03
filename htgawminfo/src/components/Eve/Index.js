import React from "react";
import "./style.css";
import EPic from "../images/eve.jpg";

const Form = props => {
    return (
        <form>
            <h2>Eve</h2>
            <img src={EPic} alt="Eve Pic"/>
            <list>
                <li>
                    <ul>Real Name: Eve Rothlo</ul>
                    <ul>Occupation: Death Row Attorney</ul>
                    <ul>Origin: USA</ul>
                    <ul>Alignment: Positive </ul>
                    <ul>Status: Alive</ul>
                    <ul>Age: 50s? (at around season 6)</ul>
                    <ul>Birth Year: 1960s?</ul>
                    <ul>Race/Ethnicity: White/European-American</ul>
                    <ul>Sexual Orientation: Lesbian</ul>
                    <ul>Episode Count: 10</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;