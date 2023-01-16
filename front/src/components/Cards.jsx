import Card from './Card';
import styles from './Style.module.css'

export default function Cards(props){

   return (<div>
	    {
		props.characters.map((ch)=>{
			return(	
			<div className={styles.Contenetor}>
			<Card name={ch.name} species={ch.species} gender={ch.gender} image={ch.image} id={ch.id} onClose={props.onClose}/>
			</div>
			);
			})
		}
	  </div>
)}
