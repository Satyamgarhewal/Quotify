    const postsHandle = document.getElementById('posts')
    const quoteTag = document.getElementById('nQuote')
    const saveTag = document.getElementById('sQuote')
    const hTag= document.getElementById('quote')
    const showTag = document.getElementById('show')
    const listHandle = document.getElementById('list')
    const authorTag = document.getElementById('author')
    const newTag = document.getElementById('new')
    const spinTag = document.getElementById('spin')
    
    var data
    var author
    var storage 

    saveTag.disabled=false
   // saveTag.textContent="Save Quote"
    axios.get('https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
    .then(function(response)
    {
        console.log(response.data.quoteText)
        data = response.data.quoteText
        author = response.data.quoteAuthor
        if(data)
        {
        hTag.innerHTML= data
        authorTag.innerHTML=   `~ ${author}`
        }
    })
    .catch(function(err){
        console.log(err)
    })
    newTag.addEventListener('click',function(){
        saveTag. textContent ='Save Quote'
       saveTag.disabled=false
        axios.get('https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
        .then(function(response){
            data = response.data.quoteText
            author = response.data.quoteAuthor
            if(data)
            {
               hTag.innerHTML=data
                authorTag.innerHTML=`-${author}`
            }
            else{
                
            }
        })
        .catch(function(err){
            const band = window.navigator.connection.downlink
            console.log(err)
           hTag.innerHTML=err
            
        })
    })

    saveTag.addEventListener('click',function(){
       
        saveTag.innerHTML="Saved"
        saveTag.disabled=true

        
        const quote = {author, data}
        
        let storedQuotes = localStorage.getItem('quotes')

        if(storedQuotes)
        {
           storedQuotes =JSON.parse(storedQuotes) 
        }
        else{
            storedQuotes=[]
        }
        storedQuotes.push(quote)
          
        localStorage.setItem('quotes', JSON.stringify(storedQuotes))
        
    })
    

