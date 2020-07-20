import React, { useState, useEffect, useRef } from "react";
import "./Timer.css";

const Timer = () => {
  const [segundos, setSegundos] = useState(0); //en este estado guardo los segundos
  const [activo, setActivo] = useState(false); //en este estado controlo el boton inicio y pausa
  const [tipo, setTipo] = useState("Contador"); //en este estado controlo el boto contador  cuenta regresiva
  const myRef = useRef(null); //hook para cuenta regresiva

  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
    myRef.current.value = 0;
  }

  function cambioTipo() {
    if (tipo === "Contador") setTipo("Cuenta Regresiva");
    if (tipo === "Cuenta Regresiva") setTipo("Contador");
  }

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === "Contador") {
      intervalo = setInterval(() => {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === "Cuenta Regresiva") {
      intervalo = setInterval(() => {
        setSegundos((segundos) => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === "Contador") {
      clearInterval(intervalo);
    }
    if (segundos < 0 && tipo === "Cuenta Regresiva") {
      reset();
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);

  function agregaSegundos() {
    // `current` apunta al elemento de entrada de texto montado
    let ref = myRef.current.value;
    setSegundos(ref);
  }

  return (
    <div className="app">
      <div className="time">{segundos}s.</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            activo ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {activo ? "Pausa" : "Inicio"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button" onClick={cambioTipo}>
        {tipo}
      </button>
      {tipo === "Cuenta Regresiva" && (
        <input
          type="number"
          ref={myRef}
          onChange={agregaSegundos}
          placeholder="Ingresa Segundos"
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default Timer;
