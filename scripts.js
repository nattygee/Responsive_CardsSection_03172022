var hoverBtn = document.getElementById("hoverBtn1");
var shuffleBtn = document.getElementById('theShuffler');
var card1 = document.getElementById("card1");
var cardList = document.getElementById('sectionForCards');

shuffleBtn.addEventListener('click', function() {
    console.log("buttonCLICKO");
    for (var i = cardList.children.length; i >= 0; i--) {
        cardList.appendChild(cardList.children[Math.random() * i | 0]);
    }
})