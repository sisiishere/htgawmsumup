import React from "react";
import "./style.css";
import BPic from "../images/bonnie.jpg";

const Form = props => {
    return (
        <form>
            <h2>Bonnie</h2>
            <img src={BPic} alt="Bonnie Pic"/>
            <list>
            <li>
                    <ul>Real Name: Bonnie Winterbottom</ul>
                    <ul>Occupation: Attorney</ul>
                    <ul>Origin: Harrisburg, Pennsylvania, USA</ul>
                    <ul>Alignment: Neutral </ul>
                    <ul>Status: Deceased (from accidentally shot in the stomach by courthouse security)</ul>
                    <ul>Age: 37 (at around season 5)</ul>
                    <ul>Birth Year: 1979</ul>
                    <ul>Race/Ethnicity: White/European-American</ul>
                    <ul>Sexual Orientation: Bisexual</ul>
                    <ul>Episode Count: 90</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;