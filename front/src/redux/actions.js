
export function addFavorite(character){
	return {
		type:'ADD_FAVORITE',
		payload:character
		}
	}

export function deleteFavorite(id){
	return {
		type:'DELETE_FAVORITE',
		payload:id
		}
	}
export function filterCards(status){
	return{
		type:'FILTER',
		payload:status
		}
	}
export function orderCards(id){
	return {
		type:'ORDER',
		payload:id
		}
	}
export function showAll(){
	return {
		type:'SHOW_ALL'
		}
	}
