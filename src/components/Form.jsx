import React from "react";

const Form = ({ loadWeather }) => (
    <div>
        <form className="form-group" onSubmit={loadWeather}>
            <h3>WEATHER APP</h3><br />
            <input type="text" name="city" placeholder="Enter city..." /><br /><br />
            <input type="text" name="country" placeholder="Enter country..." /><br /><br />
            <button className="btn btn-primary">GET WEATHER</button>
        </form>
    </div>
)

export default Form;


