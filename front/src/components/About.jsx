import React from 'react';
import style from "./Nothome.module.css";

export default function About(){
	return(<div className={style.About}>
		<h1>About</h1>
	     <div className={style.text}>
		<h2><b>Rick&Morty App</b></h2>
		<p><b>Rick & Morty App</b> it's a personal project where you can make a list with your favorite charactes from <i>Rick and Morty</i> serie.
		 You can also see more details about the characters you added or add a random one.  
		</p>
	     </div>
	     <div className={style.text}>
		<h2>The Author</h2>
		<ul>
		<li><b>Name:</b>Fabian Romero</li>
		<li><b>E-mail:</b>chapulinozeta@gmail.com</li>
		<li><b>Profession:</b>Full Stack Developer</li>
		<li><b>Studied at:</b>Full Stack Developer Henry Course</li>
		</ul>
	    </div>

		</div>)
	}
