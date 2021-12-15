import React, {useContext} from "react";
import './btnToggle.css'
import { ThemeContext } from "./context";

export default function BtnToggle () {

    const {toggleTheme, theme} = useContext
    (ThemeContext)
    return (
        <div
            onClick={toggleTheme}
            className= {theme ? 'btn-toggle goLight' :
            'btn-toggle goDark'}
            >
            {theme ? "NIGHT" : "LIGHT"}

        </div>
    ) 
}