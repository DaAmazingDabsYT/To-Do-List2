let inputBox=document.getElementById("input-box");
let unList=document.getElementById("list-container")
function addTask(){
    if(inputBox.value==""){
        alert("You Must Type Someting In The Box ")
    }
    else{
        let listItem=document.createElement("li")
        listItem.innerHTML=inputBox.value;
        unList.appendChild(listItem)
        let span=document.createElement("span")
        span.innerHTML="x"
        listItem.appendChild(span)
    }
    inputBox.value=""
    saveData()
}
unList.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)
function saveData(){
    localStorage.setItem("data", unList.innerHTML)
}
function show(){
    unList.innerHTML=localStorage.getItem("data")
}
show()