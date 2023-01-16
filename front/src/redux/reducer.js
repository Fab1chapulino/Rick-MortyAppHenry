

const initialState={
	myFavorites:[],
	myFavoritesCopy:[]
	};

export default function rootReducer(state=initialState, action){
	switch (action.type){
	case 'ADD_FAVORITE':
	return {
		...state,
		myFavoritesCopy:[...state.myFavoritesCopy, action.payload],
		myFavorites:[...state.myFavoritesCopy, action.payload]
		};
	case 'DELETE_FAVORITE':
	const myFavoritesRender = state.myFavorites.filter((ch)=>ch.id !== action.payload)
	return {
		...state,
		myFavorites:myFavoritesRender,
		myFavoritesCopy:myFavoritesRender
		};
	case 'FILTER':
	const filter=state.myFavoritesCopy.filter((ch)=>ch.gender === action.payload)
	return {
		...state,
		myFavorites:filter,
		};
	case 'ORDER':
                   return{
                           ...state,
                           myFavorites:[...state.myFavorites].sort((a,b)=>{
				if(action.payload==='Ascendente'){
					return a.id-b.id;
					}
				if(action.payload==='Descendente'){
					return b.id-a.id;
					}
				})
               		}
	case 'SHOW_ALL':
	return{
		...state,
		myFavorites:[...state.myFavoritesCopy]
		}
	default:
	return state;
		}
	}
