let cardArray = [];
let ctr = 0;
document.getElementById("addCard").addEventListener("click", ()=>{
    let listItem = document.createElement("li")
    listItem.setAttribute("id", ctr);
    listItem.style.height="200px";
    listItem.style.width="200px";
    listItem.style.background="#ffa3a3";
    listItem.style.borderRadius="15px"
    listItem.style.display="inline-block"
    listItem.style.margin="0 10px 10px 0"
    let cardTemplate = document.createElement("div");
    cardTemplate.setAttribute("id", "jhvj ")
    listItem.appendChild(cardTemplate);
    let cardList = document.getElementById("cardList")
    let placeHolder = document.getElementById("tite");
    let addCard = document.getElementById("addCard");
    //cardList.appendChild(listItem).before(addCard);
    cardArray.unshift(listItem);
    addCard.parentNode.insertBefore(cardArray[0],addCard)
    
    ctr++;
    //console.log(cardArray)
}); 

function printCard(){
    console.log(cardArray)
    //cardArray.shift()
}

function fuck(){
    console.log("spawn success");
    let listItem = document.createElement("li")
    listItem.setAttribute("id", "titeng malambot");
    listItem.setAttribute("margin", "0 10px 10px 0");
    listItem.setAttribute("background", "#ffa3a3");
    listItem.setAttribute("border-radius", "15px");
    listItem.style.height="200px";
    listItem.style.width="200px";
    listItem.style.background="#ffa3a3";
    listItem.style.borderRadius="15px"

    let cardTemplate = document.createElement("div");
    cardTemplate.setAttribute("id", "jhvj ")
    listItem.appendChild(cardTemplate);
    
    document.getElementById("cardList").appendChild(listItem);
};
