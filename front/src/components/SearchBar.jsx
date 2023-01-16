import {useState} from 'react'
import styles from './Style.module.css'

export default function SearchBar(props) {
const [data, setData]=useState("")

const handleInputChange=(e)=>{
	const value=e.target.value;
	setData(value)
	}

   return (
      <div className={styles.Searchbar}>
         <input onChange={handleInputChange} type='search'/>
      <button className={styles.btnSearch} onClick={()=>props.onSearch(data)}>Agregar</button>
	<button className={styles.btnSearch} onClick={props.randomChar}>Random</button>
      </div>
   );
}
