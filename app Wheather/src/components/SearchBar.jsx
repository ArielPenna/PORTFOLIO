import React, {useState} from 'react';
import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>
    <input className={styles.input}
      type="text"
      placeholder="Ciudad..."
      value={city}
      onChange={e=>setCity(e.target.value)}
      />
    <input className={styles.boton}
      type="submit"
      value= "Mostrar"
    />
    </form>
  );
}