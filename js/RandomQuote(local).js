const quoteHandle = document.getElementById('quote')
const authorTag = document.getElementById('auth')
const buttonHandle = document.getElementById('new')

let temp = JSON.parse(localStorage.getItem('quotes'))

console.log(temp)
const length = temp.length
console.log(length)

console.log(Math.round(Math.random() * (length - 1)))
const number = Math.round(Math.random() * (length - 1))
console.log(temp[number])

const quoteData  = temp[number]
console.log(quoteData)
console.log(quoteData.author)
console.log(quoteData.data)

const usersAuthor = quoteData.author
const usersQuote = quoteData.data

quoteHandle.innerHTML = usersQuote
authorTag.innerHTML = `~ ${usersAuthor}`

buttonHandle.addEventListener('click',function(){
   const num= Math.round(Math.random() * (length - 1))
    const clickedData = temp[num]
   
    const usersAuthor = clickedData.author
    const usersQuote= clickedData.data

    quoteHandle.innerHTML=usersQuote
    authorTag.innerHTML=`~${usersAuthor}`
})