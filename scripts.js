var hoverBtn = document.getElementById("hoverBtn1");
var shuffleBtn = document.getElementById('theShuffler');
var card1 = document.getElementById("card1");
var cardList = document.getElementById('sectionForCards');
var minimizeBtn = document.getElementById('theMinimizer');
var topBar = document.getElementById('topSectionID');

var showHideIMG = document.getElementById('visibilityIMG');

shuffleBtn.addEventListener('click', function() {
    console.log("buttonCLICKO");
    for (var i = cardList.children.length; i >= 0; i--) {
        cardList.appendChild(cardList.children[Math.random() * i | 0]);
    }
})

function hideCards() {
    if (cardList.style.display === "flex") {
        console.log('it was visible');
        cardList.style.display = "none";
        cardList.style.transition = "200ms"
        
        shuffleBtn.style.opacity = 0;
        shuffleBtn.style.transition = "200ms";
        shuffleBtn.style.transform = "translateX(-20px)";

        showHideIMG.src = "images/show_cards.svg";
    } else if (cardList.style.display === 'none') {
        console.log('it was hidden');
        cardList.style.display = "flex";
        
        shuffleBtn.style.opacity = 1;
        shuffleBtn.style.transition = "200ms";
        shuffleBtn.style.transform = "translateX(0px)";

        showHideIMG.src = "images/hide_cards.svg";
    } else { console.log('nothing seems to be worken')}
};

/* minimizeBtn.addEventListener('click', function() {
    if (cardList.style.visibility === 'collapse') {
        console.log('its visible, obviously')
        cardList.style.visibility === "hidden";
    } else if (cardList.style.visibility === "visible") {
        console.log('i think its broke');
    }
}) */
