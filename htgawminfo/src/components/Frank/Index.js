import React from "react";
import "./style.css";
import FPic from "../images/frank.jpg";

const Form = props => {
    return (
        <form>
            <h2>Frank</h2>
            <img src={FPic} alt="Frank Pic"/>
            <list>
                <li>
                    <ul>Real Name: Francis Delfino</ul>
                    <ul>Occupation: Hitman, Investigator</ul>
                    <ul>Origin: Memphis, Tennesee, USA</ul>
                    <ul>Alignment: Negative </ul>
                    <ul>Status: Deceased (shot by courthouse security after shooting another person)</ul>
                    <ul>Age: 32 (at around season 1)</ul>
                    <ul>Birth Year: 1982</ul>
                    <ul>Race/Ethnicity: White/European-American</ul>
                    <ul>Sexual Orientation: Straight</ul>
                    <ul>Episode Count: 90</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;