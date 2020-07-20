import React from "react";
import styles from "./About.module.css"

export default function About() {
    return (        
        <div className={styles.container}>
            <h2>Weather App</h2>  
            <p>Aplicacion para conocer el estado del clima en cualquier lugar del planeta.</p>
            <p>Proyecto realizado integramente con React Hooks por Ariel Penna</p>              
        </div>        
    )
}