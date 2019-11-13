const ListHandle = document.getElementById('list')
const jumboTag = document.getElementById('jumbo')
const temp = JSON.parse(localStorage.getItem('quotes'))
console.log(temp)

for(let i=0;i<temp.length;i++)
{
  
    console.log(temp[i].data)
    console.log(temp[i].author)

    // const li = document.createElement("li")
    const p = document.createElement("p")
    const h4 = document.createElement("h4")
    const deleteTag = document.createElement('button')
    const editTag = document.createElement('button')

    // const hr = document.createElement('hr')
    // li.setAttribute("style", 'list-style-type:none;')
    // li.style.listStyleType = 'none'

    p.textContent = temp[i].data
    h4.textContent = temp[i].author
    deleteTag.textContent="Delete"
    editTag.textContent = "Edit"

    deleteTag.addEventListener('click',()=>{
        const confirm = window.confirm("Are you sure?")
        if (confirm)
        {
            const quote =JSON.parse(localStorage.getItem("quotes"))
            console.log(quote)
            
            jumboTag.removeChild(p)
            jumboTag.removeChild(h4)
            jumboTag.removeChild(deleteTag)
        }
    })
    editTag.addEventListener('click',()=>{
        const confirm = window.confirm("Are you sure?")
        if(confirm){
            const formHandle = document.createElement("form")
            

        }
    })
    jumboTag.appendChild(p)
    jumboTag.appendChild(h4)
    jumboTag.appendChild(deleteTag)
   
    ListHandle.appendChild(jumboTag)
   
    }
    
//  ListHandle.appendChild(li)
  
  

// else{
//     const p = document.createElement('p')
//     p.textContent = "No data found in your storage."
//     jumboTag.appendChild(p)
//     ListHandle.appendChild(jumboTag)
// }