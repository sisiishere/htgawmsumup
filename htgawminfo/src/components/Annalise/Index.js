import React from "react";
import "./style.css";
import ANPic from "../images/annalise.jpg";

const Form = props => {
    return (
        <form>
            <h2>Annalise</h2>
            <img src={ANPic} alt="Annalise Pic"/>
            <list>
                <li>
                    <ul>Real Name: Annalise Mae Keating (nee Harkness)</ul>
                    <ul>Occupation: Law Professor, Defense Attorney</ul>
                    <ul>Origin: Memphis, Tennesee, USA</ul>
                    <ul>Alignment: Positive </ul>
                    <ul>Status: Deceased (from natural causes in flash-forward)</ul>
                    <ul>Age: 53 (at around 2020)</ul>
                    <ul>Birth Year: 1967</ul>
                    <ul>Race/Ethnicity: Black/African-American</ul>
                    <ul>Sexual Orientation: Bisexual</ul>
                    <ul>Episode Count: 90</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;