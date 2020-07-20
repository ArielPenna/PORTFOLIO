import React from 'react';
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({min, max, name, img, onClose, id}) {
  return (
  <div className= {styles.box}>
    <button className= {styles.boton} onClick = {onClose}>X</button>
    <Link to={`/ciudad/${id}`} >
      <h5 className={styles.ciudad}>{name}</h5>
    </Link>
    <div className={styles.clima}>
      <div>
        <p>MIN</p>
        <p>{min}°</p>
      </div>
      <div>
        <p>MAX</p>
        <p>{max}°</p>
      </div>
      <img className="iconoClima"src={"http://openweathermap.org/img/wn/"+img+"@2x.png"}/>
    </div>

  </div>
  );
  
};