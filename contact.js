var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closebtn = document.getElementById("close-btn")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

closebtn.addEventListener("click", function(){
     sidenav.style.right="-50%"
})