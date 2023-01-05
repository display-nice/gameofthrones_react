export default class GoTService {
	constructor () {
		this._apiBase = 'https://www.anapioficeandfire.com/api'
	}
	getResource = async (url) => {
		const result = await fetch(`${this._apiBase}${url}`);
		if (!result.ok) {
			throw new Error(`I couldn't fetch ${url}. Status: ${result.status}`)
		}		
		return await result.json();
	}
	getAllCharacters = async () => {
		return this.getResource('/characters?page=5&pageSize=10')
	}
	getCharacter = async (id) => {
		return this.getResource(`/characters/${id}`)
	}
}

// export default GoTService;

// const getResources = async (url) => {
// 	const result = await fetch(url);
// 	if (!result.ok) {
// 		throw new Error(`я не смог принести ничего от ${url}. статус: ${result.status}`)
// 	}
// 	const json = await result.json();
// 	return json;
// }
// export default getResources;

// const getResources = () => {
// 	const url = 'https://jsonplaceholder.typicode.com/posts/';
// 	const data = {username: 'Dick'};
// 	fetch(url, {
// 		method: 'POST',
// 		body: JSON.stringify(data),
// 		headers: {
// 			'Content-Type':'application/json'
// 		}
// 	})
// 	.then(response => response.json())
//    .then(json => console.log('Успех!', json))
// 	.catch(error => console.log('Еррор блять', error))
// }
// export default getResources;