import React from 'react'
import styles from './Form.module.css'
import Validate from './validation.js'

export default function Form({login}){
	const [userData,setUserData]=React.useState({
        username:'',
        password:''
        });
	const [errors,setErrors]=React.useState({
		email:'',
		password:''
	});
	function handleSubmit(e){
	e.preventDefault();
	login(userData)
	}
	function handleInputChange(e){
		setUserData({
		...userData,
		[e.target.name]:e.target.value
		})
		setErrors(Validate({
		...userData,
		[e.target.name]:e.target.value
		}))
	}
	return (<div className={styles.Login}>
	<form onSubmit={(e)=>handleSubmit(e)}>
	<label className={styles.label}>Username</label><br/><input className={errors.email && styles.danger} type='text' name='username' value={userData.username} onChange={(e)=>handleInputChange(e)}/>
	<p className={styles.error}>{errors.email && errors.email}</p>
	<label className={styles.label}>Password</label><br/><input className={errors.password && styles.danger}type='password' name='password' value={userData.password} onChange={(e)=>handleInputChange(e)}/>
	<p className={styles.error}>{errors.password && errors.password}</p>
	<button type='submit'>Login</button>
	</form>
	</div>)
	}
