import React from "react";
import styles from "./Ciudad.module.css"

export default function Ciudad({city}) {
    return (
        <div className={styles.ciudad}>
            <div className="container">
                <h2>{city.name}</h2>
                <div className="info">
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                    <img className="iconoClima"src={"http://openweathermap.org/img/wn/"+ city.img+"@2x.png"}/>
                </div>
            </div>
        </div>
    )
}