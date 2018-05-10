/* eslint-disable */
import {getUsers} from './api/userApi'

getUsers().then(result => {
	let usersBody = ""; 

	result.forEach(e => {
		usersBody += `<tr>
		<td><a href="#" data-id="${e.id}" class="deleteUser">Delete</a></td>
		<td>${e.id}</td>
		<td>${e.firstName}</td>
		`
	});
	global.document.getElementById('users').innerHTML = usersBody;
}); 
