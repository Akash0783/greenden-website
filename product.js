var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closebtn = document.getElementById("close-btn")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

closebtn.addEventListener("click", function(){
     sidenav.style.right="-50%"
})

var productContainer = document.getElementById("productContainer")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var entered_value = event.target.value.toUpperCase()

    for (count=0; count<productList.length; count=count+1)
    {
        var productName = productList[count].querySelector("h1").textContent 
        if(productName.toUpperCase().indexOf(entered_value)<0)
        {
            productList[count].style.display ="none"
        }
        else{
            productList[count].style.display ="block"
        }
    }
})