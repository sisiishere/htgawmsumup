import React from "react";
import "./style.css";
import RPic from "../images/rebecca.jpg";

const Form = props => {
    return (
        <form>
            <h2>Rebecca</h2>
            <img src={RPic} alt="rebecca Pic"/>
            <list>
                <li>
                    <ul>Real Name: Rebecca Sutter</ul>
                    <ul>Occupation: Drug Dealer, Bartender</ul>
                    <ul>Origin: Philadelphia, Pennsylvania, USA</ul>
                    <ul>Alignment: Neutral </ul>
                    <ul>Status: Deceased (suffocated by Bonnie)</ul>
                    <ul>Age: 32 (at around Season 1)</ul>
                    <ul>Birth Year: 1992</ul>
                    <ul>Race/Ethnicity: White/European-American</ul>
                    <ul>Sexual Orientation: Straight</ul>
                    <ul>Episode Count: 17</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;