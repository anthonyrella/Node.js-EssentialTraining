//export a literal 
module.exports = {
	//object literal enhancements. New way of defining an object literal. This is an es6 thing
	printName(person) {
		return `${person.last}, ${person.first}`;
	}

};