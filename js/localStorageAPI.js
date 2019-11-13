const quoteHandle= document.getElementById('quote')
const authorTag = document.getElementById('authy')
const rootHandle = document.getElementById('root')

const authors = []
const quoteData = []

const temp = JSON.parse(localStorage.getItem('quotes'))
console.log(temp)
temp.map(function(quote){
    console.log(quote.author)
    console.log(quote.data)
    quoteHandle.textContent= quote.data
    authorTag.textContent= quote.author
    rootHandle.appendChild(quoteHandle)
    rootHandle.appendChild(authorTag)
    
})

console.log(authors)
console.log(quoteData)