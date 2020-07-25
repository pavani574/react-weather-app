import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather"
import Form from "./components/Form"
import "./App.css";

const api_key = "060a6bcfa19809c2cd4d97a212b19273"

const App = () => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [temp, setTemp] = useState("");

    const getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        if (city && country) {
            const api_call = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${api_key}`);
            const response = await api_call;
            setCity(response.data.name)
            setCountry(response.data.sys.country);
            setTemp(response.data.main.temp);
            setDescription(response.data.weather[0].description);
            console.log(response);
          }
    }
    return (
        <div className="App">
            <Form loadWeather={getWeather} /><br/>
            <Weather city = {city}  country = {country} temp = {temp} description = {description} />
        </div>
    )
}

export default App;