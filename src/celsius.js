import { useState } from "react";

export default function Celsius(){

    //creating states
    const [celsius, setCelsius] = useState(null);
    const [fahrenheit, setFahrenheit] = useState(null);

    const fahrenheitToCelsius = (e) => {
        e.preventDefault();
        const convertedValue = ((fahrenheit - 32) * 5) / 9;
        setCelsius(convertedValue);
    }

    return (
        <div className="box">
            <h2>Fahrenheit to Celsius</h2>
            <form>
            <input type="number" onChange={(e)=>setFahrenheit(e.target.value)} value={fahrenheit} placeholder="Fahrenheit"></input>
            <button className="submit-btn" type="submit" onClick={fahrenheitToCelsius}><strong>Convert</strong></button>
            </form>
            <br></br>
            <h2>Celsius</h2>
            <h3>{celsius}</h3>
        </div>
    )
}