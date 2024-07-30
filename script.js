
    var popupOver = document.querySelector(".popup-over")
    var popupBox = document.querySelector(".popup-box")
    function popup(){
    
        popupBox.style.display="block"
        popupOver.style.display="block"

    }
    var canclebtn = document.getElementById("cancle-poo")
    canclebtn.addEventListener("click",function(event){
        event.preventDefault()
        popupBox.style.display="none"
        popupOver.style.display="none"
    })
    var addbtn = document.getElementById("add-book")
    addbtn.addEventListener("click",function(event){
        event.preventDefault()
    })

    // select container  add book title author discription 
    var  container = document.querySelector(".container")
    var addbook = document.getElementById("add-book")
    var titleinput = document.getElementById("book-title-input")
    var authorinput = document.getElementById("book-author-input")
    var discriptioninput = document.getElementById("book-discription-input")

    addbook.addEventListener("click",function(){
        var div = document.createElement("div")
        div.setAttribute("class","book-container")
        div.innerHTML=`<h2>${titleinput.value}</h2>
        <h5>${authorinput.value}</h5>
        <p>${discriptioninput.value}</p>
        <button onclick=" deletebook(event)">Delete</button>`
        
        container.append(div)
        popupBox.style.display="none"
        popupOver.style.display="none"
    })

    function deletebook(event){
        event.target.parentElement.remove()
    }