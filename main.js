let addToDo = document.getElementById("addToDo")
let inputField = document.getElementById("inputField")
let toDoContainer = document.getElementById("toDoContainer")
let done = document.getElementById("done")
 addToDo.addEventListener('click',() =>{
     if(inputField.value == ""){
        //  alert user 
     }else{
         var tododiv =document.createElement('div')
         var paragraph = document.createElement("p")
         var btn = document.createElement("img")
         var inputText = document.createTextNode(inputField.value)
         btn.src="trash.png"
         btn.height="35"
         paragraph.appendChild(inputText)
         tododiv.appendChild(paragraph)
         btn.classList.add("btn1")
         tododiv.appendChild(btn)
        toDoContainer.appendChild(tododiv)
        tododiv.classList.add("bton")
         inputField.value = "";
         paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through";
        })
        btn.addEventListener("click", function(){
            toDoContainer.removeChild(tododiv);
        })
     }
 })

 const toggleSwitch = document.getElementById("checkbox")
 function switchTheme(e) {
   if (e.target.checked) {
     document.body.classList.add("dark");
   } else {
     document.body.classList.remove("dark");
   }
 }

 toggleSwitch.addEventListener("change", switchTheme, false);
 

