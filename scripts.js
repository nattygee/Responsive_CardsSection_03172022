var hoverBtn = document.getElementById("hoverBtn1");
var card1 = document.getElementById("card1");


card1.addEventListener("mouseover", function() {
    console.log("hovering card 1");
    hoverBtn.getAttribute('style').replace('hidden', 'visible');
})