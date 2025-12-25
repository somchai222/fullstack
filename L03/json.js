const book = {
    title: 'Becoming',
    author: 'George Orwell',
    isAvailable: false,
}

const bookJson = JSON.stringify(book)

console.log(bookJson)
console.log(typeof bookJson)

const receivdBookObj = JSON.parse(bookJson)

console.log(receivdBookObj.author)
console.log(typeof receivdBookObj)
