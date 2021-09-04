import React from "react";
import "./style.css";
import WPic from "../images/wes.jpg";

const Form = props => {
    return (
        <form>
            <h2>Wes</h2>
            <img src={WPic} alt="wes Pic"/>
            <list>
                <li>
                    <ul>Real Name: Wesley Gibbins (birth name: Christophe Edmond)</ul>
                    <ul>Occupation: Middleton Law Student, Judge</ul>
                    <ul>Origin: Ohio, USA</ul>
                    <ul>Alignment: Positive </ul>
                    <ul>Status: Deceased (asphyxiated and burned by Dominick on the behalf of Jorge Castillo)</ul>
                    <ul>Age: 23 </ul>
                    <ul>Birth Year: 1993</ul>
                    <ul>Race/Ethnicity: Biracial (Black and White)</ul>
                    <ul>Sexual Orientation: Straight</ul>
                    <ul>Episode Count: 47</ul>
                </li>
            </list>
        </form>
    )
}
export default Form;