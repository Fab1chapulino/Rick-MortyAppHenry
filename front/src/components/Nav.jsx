import SearchBar from './SearchBar.jsx';
import styles from './Style.module.css';
import React from "react";
import {NavLink, useLocation} from "react-router-dom";

export default function Nav(props){
	const location=useLocation();
	return(
		<div className={styles.Nav}>
		 <div className={styles.Navlinks}>
		<NavLink to="/home" className={location.pathname==="/home"?styles.linkClick:styles.link}>Home</NavLink>
		<NavLink to="/favorites" className={location.pathname==="/favorites"? styles.linkClick : styles.link}>Favorites</NavLink>
		<NavLink to="/About" className={location.pathname==="/About"? styles.linkClick : styles.link}>About</NavLink>
		 </div>
		<SearchBar onSearch={props.onSearch} randomChar={props.randomChar}/>
		</div>
		)
	}
