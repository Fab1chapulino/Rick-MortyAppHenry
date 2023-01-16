import './App.css'
import React from 'react';
import {Routes,Route,useLocation,useNavigate} from "react-router-dom";
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import Favorites from './components/Favorites.jsx'

function App () {
//variables & states
const [characters, setCharacters]=React.useState([]);
const [access,setAccess]=React.useState(false);
const navigate=useNavigate();
const username='chapulinozeta@gmail.com';
const password='123456Fa';
const location=useLocation();

//Login
function login(userData){
	if(userData.username===username && userData.password===password){
		setAccess(true);
		navigate('/home')
		}
	}
React.useEffect(() => {
   !access && navigate('/');
}, [access]);

//To search characters
function onSearch(character){
	fetch('https://rickandmortyapi.com/api/character/'+character)
	//fetch(`http://localhost:3001/rickandmorty/characters/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
	let exists = characters.find((e)=> e.id === data.id)
	if(exists){
	window.alert("Ya existe")
	}else{
	setCharacters((oldChars) => [...oldChars, data]);
	}
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
        }
//To pick a random character
function randomChar(){
	fetch('https://rickandmortyapi.com/api/character/'+Math.floor((Math.random()*825)+1))
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
	}



//To close a card
function onClose(id){
	setCharacters(characters.filter((ch)=>ch.id !== id))
}


//render
  return (
<div className='App'>
	<div>
	{location.pathname==="/"?null:<Nav onSearch={onSearch} randomChar={randomChar}/>}
	</div>
	<Routes>
	  <Route path="/" element={<Form login={login}/>}></Route>
	  <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}></Route>
	  <Route path="/about" element={<About />}></Route>
	  <Route path="/favorites" element={<Favorites />} ></Route>
	  <Route path="/detail/:detailId" element={<Detail />}></Route>
	</Routes>
</div>
  );
}

export default App
