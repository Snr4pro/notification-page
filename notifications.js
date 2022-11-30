const messageBox = document.getElementById("empty1");
let addText = document.createTextNode("reacted to your first post");
let addAction = document.getElementById("action");
let subject = document.createTextNode("my first tournament today!");
let addTime = document.getElementById("time");
let timeLapse = document.createTextNode("1m ago");
let follow = document.getElementById("follow");
let addFollow = document.createTextNode("followed you");
let addTimeTwo = document.getElementById("time2");
let timeLapseTwo = document.createTextNode("5m ago");
let join = document.getElementById("joined");
let joinedClub = document.createTextNode("has joined your group");
let group = document.getElementById("group");
let clubAdd = document.createTextNode("Chess Club");
let addTimeThree = document.getElementById("time3");
let timeLapseThree = document.createTextNode("1 day ago");
let privateMessage = document.getElementById("private");
let addMessage = document.createTextNode("has sent you a private message");
let addTimeFour = document.getElementById("time4");
let timeLapseFour = document.createTextNode("5 days ago");
let comment = document.getElementById("comment");
let addComment = document.createTextNode("commented on your picture");
let addTimeFive = document.getElementById("time5");
let timeLapseFive = document.createTextNode("1 week ago");
let addTimeSix = document.getElementById("time6");
let timeLapseSix = document.createTextNode("2 weeks ago");
let addTimeSev = document.getElementById("time7");
let timeLapseSev = document.createTextNode("2 weeks ago");
let chessPic = document.getElementById("chess");
let react = document.getElementById("reacted");
let addReact = document.createTextNode("reacted to your recent post");
let addStrategy = document.getElementById("strategy");
let addGroup = document.createTextNode("5 end-game strategies to increase your win rate")
let leave = document.getElementById("left");
let remove = document.createTextNode("left the group");
let groupTwo = document.getElementById("group2");
let showGroup = document.createTextNode("Chess Club");
const unread = document.getElementsByClassName("mes-box");
const counter = document.getElementById("three");





messageBox.appendChild(addText);
addAction.appendChild(subject);
addTime.appendChild(timeLapse);
follow.appendChild(addFollow);
addTimeTwo.appendChild(timeLapseTwo);
join.appendChild(joinedClub);
group.appendChild(clubAdd);
addTimeThree.appendChild(timeLapseThree);
privateMessage.appendChild(addMessage);
addTimeFour.appendChild(timeLapseFour);
comment.appendChild(addComment);
addTimeFive.appendChild(timeLapseFive);
react.appendChild(addReact);
addStrategy.appendChild(addGroup);
leave.appendChild(remove);
groupTwo.appendChild(showGroup);
addTimeSix.appendChild(timeLapseSix);
addTimeSev.appendChild(timeLapseSev)

const unReadMessages = document.querySelectorAll(".unread");
const unreadTwo = document.getElementById("notifications");
const markAll = document.getElementById("mark");
const message = document.querySelectorAll(".mes-box");



unreadTwo.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        const newUnReadMessages = document.querySelectorAll(".unread");
        unreadTwo.innerText = newUnReadMessages.length;
    })
})

markAll.addEventListener("click", () => {
    unReadMessages.forEach((message) => {
        message.classList.remove("unread")
    })
    const newUnReadMessages = document.querySelectorAll(".unread");
    unreadTwo.innerText = newUnReadMessages.length;
})

const dot = document.getElementById("dot");
const dottwo = document.getElementById("dot2");
const dotthree = document.getElementById("dot3");

function color() {
    backColor() + backColorAng() + backColorJac();
}


function backColor() {
    document.querySelector(".mes-box").style.background = 'transparent';
    dot.style.display = 'none';
}

function backColorAng() {
    document.querySelector(".mes-boxtwo").style.background = 'transparent';
    dottwo.style.display = 'none';
}

function backColorJac() {
    document.querySelector(".mes-boxthree").style.background = 'transparent';
    dotthree.style.display = 'none';
}




