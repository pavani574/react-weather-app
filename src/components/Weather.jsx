import React from "react";

const Weather = ({ city, country, temp, description }) => {
        return (
            <>
                    <div style={{color:'blue'}}>
                        { temp ? <span><h2>{ Math.floor(temp) }&deg;</h2></span> : null }
                        { city && country ? <span><h2>{ city }, { country }</h2></span> : null }
                        <span><h3>{ description }</h3></span>
                    </div>
            </>
        );
}

export default Weather;