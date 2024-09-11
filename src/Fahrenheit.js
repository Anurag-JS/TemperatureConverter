import { useState } from "react"

export default function Fahrenheit(){

    //creating states
    const [celsius, setCelsius] = useState(null);
    const [fahrenheit, setFahrenheit] = useState(null);

    const celsiusToFahrenheit = (e) => {
        e.preventDefault();
        const convertedValue = (celsius * 9/5) +32;
        setFahrenheit(convertedValue);
    }

    return (
        <div className="box">
            <h2>Celsius to Fahrenheit</h2>
            <form>
            <input type="number" onChange={(e)=>setCelsius(e.target.value)} value={celsius} placeholder="Celsius"></input>
            <button className="submit-btn" type="submit" onClick={celsiusToFahrenheit}><strong>Convert</strong></button>
            </form>
            <br></br>
            <h2>Fahrenheit</h2>
            <h3>{fahrenheit}</h3>
        </div>
    )
}