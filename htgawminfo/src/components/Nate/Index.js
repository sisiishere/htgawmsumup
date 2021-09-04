import React from "react";
import "./style.css";
import NPic from "../images/nate.jpg";

const Form = props => {
    return (
        <form>
            <h2>Nate</h2>
            <img src={NPic} alt="nate Pic"/>
            <list>
                <li>
                    <ul>Real Name: Nathaniel Lahey, Jr.</ul>
                    <ul>Occupation: Detective, Lead Investigator</ul>
                    <ul>Origin: USA</ul>
                    <ul>Alignment: Positive </ul>
                    <ul>Status: Alive</ul>
                    <ul>Age: 40s (at around 2020)</ul>
                    <ul>Birth Year: 1970s</ul>
                    <ul>Race/Ethnicity: Black/African-American</ul>
                    <ul>Sexual Orientation: Straight</ul>
                    <ul>Episode Count: 90</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;