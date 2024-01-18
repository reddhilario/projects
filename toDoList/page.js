let cardArray = [];
let card = {
    title: "Task Title",
    description: "Description",
    tags: [
        "priority"
    ]
};
let cardList = [];
let cardCounter = 0;
document.getElementById("addCard").addEventListener("click", ()=>{
    let listItem = document.createElement("li")
    let cardTemplate = document.createElement("div");
    let cardBody = document.createElement("div");
    let cardTag = document.createElement("div")
    let cardTitleDiv = document.createElement("div");
    let cardTitleInput = document.createElement("input");
    let cardDescriptionDiv = document.createElement("div");
    let cardDescriptionTextArea = document.createElement("textarea");
    let cardFooter = document.createElement("div");
    let cardEditDiv = document.createElement("div");
    let cardDeleteDiv = document.createElement("div");
    let cardSaveDiv = document.createElement("div");
    let addCard = document.getElementById("addCard");
    
    //listItem.setAttribute("id", cardCounter);
    listItem.style.height="200px";
    listItem.style.width="200px";
    listItem.style.background="#ffa3a3";
    listItem.style.borderRadius="15px";
    listItem.style.margin="0 10px 10px 0";
    listItem.style.float="left";

    cardTemplate.setAttribute("id", cardCounter);
    cardTemplate.style.height="100%";
    cardTemplate.style.width="100%";
    cardTemplate.style.borderRadius="15px";
    cardTemplate.setAttribute("id", "card-" + cardCounter + " div");

    cardBody.setAttribute("class", "alignItemsCenterVertical")
    cardBody.style.height="70%";
    cardBody.style.width="100%";
    cardBody.style.borderRadius="15px";

    cardTag.setAttribute("class", "marginTop10px alignItemsCenter justifyContentCenter");
    cardTag.setAttribute("id", "cardTag");

    cardTitleDiv.setAttribute("class", "marginTop10px alignItemsCenter justifyContentCenter")

    cardFooter.setAttribute("class","footer justifyContentSpaceAround");
    cardFooter.style.height="30%";
    cardFooter.style.width="100%";
    cardFooter.style.borderRadius="15px";

    cardEditDiv.setAttribute("class", "footerComponent marginTop5px")
    cardEditDiv.style.height="50px";
    cardEditDiv.style.width="50px";
    cardEditDiv.style.borderRadius="15px";
    cardEditDiv.style.background="blue"
    cardEditDiv.style.display="none"
    
    cardDeleteDiv.setAttribute("class", "footerComponent marginTop5px")
    cardDeleteDiv.style.height="50px";
    cardDeleteDiv.style.width="50px";
    cardDeleteDiv.style.borderRadius="15px";
    cardDeleteDiv.style.background="red"
    cardDeleteDiv.style.display="none"

    cardSaveDiv.setAttribute("class", "footerComponent marginTop5px")
    cardSaveDiv.style.height="50px";
    cardSaveDiv.style.width="50px";
    cardSaveDiv.style.borderRadius="15px";
    cardSaveDiv.style.background="green"
    cardSaveDiv.style.display="none"

    
    listItem.appendChild(cardTemplate);

    cardBody.appendChild(cardTag);
    cardBody.appendChild(cardTitleDiv);
    cardTitleDiv.appendChild(cardTitleInput);
    cardBody.appendChild(cardDescriptionDiv);
    cardDescriptionDiv.appendChild(cardDescriptionTextArea);
    cardTemplate.appendChild(cardBody);
    
    cardFooter.appendChild(cardEditDiv);
    cardFooter.appendChild(cardDeleteDiv);
    cardFooter.appendChild(cardSaveDiv);
    cardTemplate.appendChild(cardFooter);

    cardArray.unshift(listItem);

    cardList.push(card);


    addCard.parentNode.insertBefore(cardArray[0],addCard)

    
    cardCounter++;
}); 

function printArray(){
    console.log(cardList)
}
function updateCard(id, data){

}
document.getElementById("cardList").addEventListener("mouseover", (e)=>{
    

    if (e.target && e.target.nodeName == "DIV" && e.target.classList.contains('footer') && e.target.id != "addCard" || e.target.classList.contains('footerComponent')) {
        let footerstuff = e.target.parentNode.querySelectorAll(".footerComponent")
        footerstuff.forEach(element => {
            element.style.display="block"
        });
        //footerstuff.display="block"
    }
});

document.getElementById("cardList").addEventListener("mouseout", (e)=>{
    

    if (e.target && e.target.nodeName == "DIV" && e.target.classList.contains('footer') && e.target.id != "addCard") {
        let footerstuff = e.target.parentNode.querySelectorAll(".footerComponent")
        footerstuff.forEach(element => {
            element.style.display="none"
        });
        e.target.style.background = "#ffa3a3"
    }
});

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
