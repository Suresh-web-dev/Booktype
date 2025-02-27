overlay = document.querySelector(".overlay")
popup = document.querySelector(".popup-box")
mainbutton = document.getElementById("main_button")


mainbutton.addEventListener("click",function(){
    overlay.style.display = "block"
    popup.style.display = "block"
})


cancel = document.getElementById("cancel_button")

cancel.addEventListener("click",function(){
    overlay.style.display = "none"
    popup.style.display = "none"
})


addbook = document.getElementById("add_button")
containers = document.querySelector(".container")
booktitle = document.getElementById("book_title")
bookauthor = document.getElementById("book_author")
bookdescription = document.getElementById("book_description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    div = document.createElement("div")
    div.setAttribute("class","story")
    div.innerHTML = `<h2>${booktitle.value}</h2>
    <h3>${bookauthor.value}</h3>
    <p>${bookdescription.value}</p>
    <button onclick="inner_delete(event)">Delete</button>`
    containers.append(div)
    overlay.style.display = "none"
    popup.style.display = "none"
})

function inner_delete(event)
{
    event.target.parentElement.remove()
}
