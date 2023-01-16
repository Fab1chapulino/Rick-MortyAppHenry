import {useState,useEffect} from "react"
import {useParams} from 'react-router-dom';
import style from "./Nothome.module.css"

export default function Detail(){
	const {detailId}=useParams();
	const [character, setCharacter]=useState({});
	
	useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response) => response.json())
    .then((char) => {
      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    })
    .catch((err) => {
      window.alert("No hay personajes con ese ID");
    });
  return setCharacter({});
}, [detailId]);
	
	return (<div className={style.detail}>
		<img src={character.image} alt={character.name} className={style.img}/>
		<ul className={style.data}>
		<li>
		<h2><span>Name:</span>{character.name}</h2>
		</li>
		<li>
		<h2><span>Status:</span>{character.status}</h2>
		</li>
		<li>
		<h2><span>Specie:</span>{character.species}</h2>
		</li>
		<li>
		<h2><span>Gender:</span>{character.gender}</h2>
		</li>
		<li>
		<h2><span>Origin:</span>{character.origin?.name}</h2>
		</li>
		</ul>
		</div>)
	}
