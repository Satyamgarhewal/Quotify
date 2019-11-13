const addTag = document.getElementById('add')
const nameHandle = document.getElementById('authorName')
const quoteHandle = document.getElementById('newQuote')
const newQuoteHandle = document.getElementById('extra')

newQuoteHandle.disabled = true
addTag.addEventListener('click', function (e) {
    e.preventDefault()
    if (nameHandle.value && quoteHandle.value) {
        addTag.innerHTML = "Added"
        addTag.disabled = true;
        newQuoteHandle.disabled = false

        const author = nameHandle.value

        const data = quoteHandle.value


        const Quote = { author, data}
        let storedQuotes = localStorage.getItem('quotes')
        if (storedQuotes) {

            storedQuotes = JSON.parse(storedQuotes)
        }
        else {
            storedQuotes = []
        }
        storedQuotes.push(Quote)
        localStorage.setItem('quotes', JSON.stringify(storedQuotes))
    }
    else {
        window.confirm('Please enter a quote and author')
    }
})