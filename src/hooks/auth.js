import { writable } from 'svelte/store';


const user = 'anggie'
const pass = 'bayu'

export const store = writable(null);

export let sessions = []

export const getUserDetails = async ( username, password ) => {
	if ( username === user && password === pass )
		return 1 
}