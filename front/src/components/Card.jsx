import styles from './Style.module.css';
import {Link} from 'react-router-dom';
import {addFavorite,deleteFavorite} from '../redux/actions.js';
import React from 'react';
import {useDispatch,useSelector} from 'react-redux'

export default function Card(props) {
	const [isFav,setIsFav]=React.useState(false);
	const dispatch = useDispatch();
	const myFavorites = useSelector((s) => s.myFavorites);


React.useEffect(() => {
	if(myFavorites){
   for (let i=0; i<myFavorites.length; i++){
      if (myFavorites[i].id === props.id) {
         setIsFav(true);
      }
   }
}
}, [myFavorites]);

	function handleFavorite(props){
	if(isFav){
		setIsFav(false);
		dispatch(deleteFavorite(props.id))
		}else{
		setIsFav(true);
		dispatch(addFavorite(props))
		}
	}



   return (
      <div>
	<div className={styles.cards}>
	<div className={styles.data}>
	<img  src={props.image} alt={props.name} />
	<ul className={styles.list}>
		<li><b>Name:</b><Link to={`/detail/${props.id}`}>{props.name}</Link></li>
		<li><b>Species:</b>{props.species}</li>
		<li><b>Gender:</b>{props.gender}</li>
	</ul>
	</div> 
	
	<div className={styles.buttons}>
	<button className={styles.btnClose} value={props.id} onClick={()=>props.onClose(props.id)}><b>X</b></button>
	{
   isFav ? (
      <button className={styles.btnFavorite} onClick={()=>handleFavorite(props)}>❤️</button>
   ) : (
      <button className={styles.btnNotFav} onClick={()=>handleFavorite(props)}>fav</button>
   )
}
	</div>
	</div>
      </div>
   );
}
