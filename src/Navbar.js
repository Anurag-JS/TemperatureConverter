import { useState } from "react";
import Celsius from "./Celsius";
import Fahrenheit from "./Fahrenheit";

export default function Navbar (){
    const [mode, setMode ] = useState("C2F");

    const toggleMode = () => {
        if(mode === "C2F"){
            setMode("F2C");
        }else{
            setMode("C2F");
        }
    }

    return (
        <div>
            <button className="swap-btn" onClick={toggleMode}><strong>Swap Converter</strong></button>
            {mode === "C2F" ? <Celsius /> : <Fahrenheit />}
        </div>
    )

}