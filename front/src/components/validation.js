function Validate(input){
	const email=/^(([^<>()[\].,;:\s@”]+(\.[^<>()[\].,;:\s@”]+)*)|(”.+”))@(([^<>()[\].,;:\s@”]+\.)+[^<>()[\].,;:\s@”]{2,35})$/
	const password=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/
	const errors={};

	if (!email.test(input.username)){
                errors.email='Usuario inválido'
                }

	/*if (input.username.length>35){
		errors.userLength='Usuario inválido'
		}*/
	//Password validation
	/*if (!input.password){
		errors.emptyPass='Por favor llena este campo'
		}*/
	/*if (input.password.length<6 || input.password.length>10){
		errors.passLength='Contraseña inválida'
		}*/


	if(!password.test(input.password)){
		errors.password='contraseña inválida'
		}
	return errors;
	}
export default Validate;
