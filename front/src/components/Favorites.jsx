import React from 'react';
import {connect} from 'react-redux';
import styles from './favorites.module.css';
import {useDispatch} from 'react-redux';
import {deleteFavorite, filterCards, showAll, orderCards} from '../redux/actions.js';

export function Favorites({myFavorites}){
	
	const dispatch=useDispatch();
	
	function deleteFav(id){
	dispatch(deleteFavorite(id))
	}

	function handleSelect(e){
		const {name, value}=e.target;
			if(name==='filter'){
				if(value==='Show All'){
				dispatch(showAll())
				return;
				}
		 	dispatch(filterCards(value))
			}
		if(name==='order'){
			dispatch(orderCards(value))
			}
		}

	return (<div>
		<div>
			<select name="filter"  className={styles.Filter} onChange={handleSelect}>
				<option value='Show All'>Show All</option>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Genderless">Genderless</option>
				<option value="unknown" >unknown</option>
			</select>
			<select name='order' className={styles.Filter} onChange={(e)=>handleSelect(e)}>
			<option value='Ascendente'>Ascendente</option>
			<option value='Descendente'>Descendente</option>
			</select>
		</div>
		{myFavorites.map((ch)=>{
			return(
				<div className={styles.card}>
				<div className={styles.data}>
				<img src={ch.image} alt={ch.name} className={styles.img}/>
				<ul className={styles.list}>
					<li><b>Name:</b> {ch.name}</li>
					<li><b>Specie:</b> {ch.species}</li>
					<li><b>Gender:</b> {ch.gender}</li>
				</ul>
				</div>
				<button className={styles.closeBtn} value={ch.id} onClick={()=>deleteFav(ch.id)}>X</button>
				</div>
				)
			})}
		</div>)
	}
function mapStateToProps(state){
	return {
		myFavorites:state.myFavorites
		}	
	}

export default connect(mapStateToProps,null)(Favorites)
