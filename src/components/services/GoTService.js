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
		const result = await this.getResource('/characters?page=5&pageSize=10');
		return result.map(this._transformCharacter)
	}
	getCharacter = async (id) => {
		const character = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(character);
	}
	getAllHouses = async (id) => {
		return this.getResource(`/houses/`)
	}
	getHouse = async (id) => {
		return this.getResource(`/houses/${id}`)
	}
	getAllBooks = async (id) => {
		return this.getResource(`/books/`)
	}
	_transformCharacter(char) {
		return {
			name: char.name,
			gender: char.gender,
			born: char.born,
			died: char.died,
			culture: char.culture	
		}
	}
	_transformHouse(house) {
		return {
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord,
			ancestralWeapons: house.ancestralWeapons
		}
	}
	_transformBook(book) {
		return {
			name: book.name,
			numberOfPages: book.numberOfPages,
			publisher: book.publisher,
			released: book.released
		}
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