
let options = document.querySelectorAll(".option");
let msg = document.querySelector(".msg")

let userscore = 0;
let compscore = 0;

const userS = document.querySelector("#user1-score");
const compS = document.querySelector("#comp-score");

const user1played = document.querySelector("#user1played");
const compplayed = document.querySelector("#compplayed");

const compgame = () => {
    const choices = ["Rock", "Paper", "Scissor"];
    const comprandom = Math.floor(Math.random() * 3)
    return choices[comprandom];
};

const draw = () => {
    msg.innerText = "Game Draw! Play again";
    msg.style.backgroundColor = "yellow";
};

const winner = (userwin, user1click, compclick) => {
    if (userwin) {
        userscore++;
        userS.innerText = userscore;
        msg.innerText = "You won!";
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        console.log(compscore);
        compS.innerText = compscore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }

};
const gameplay = (user1click) => {
    const compclick = compgame();
    compplayed.classList.remove("hide");
    compplayed.innerText = compclick;
    if (user1click === compclick) {
        draw();
    }
    else {

        let userwin = true;
        if (user1click === "Rock")
            userwin = compclick === "Paper" ? false : true;
        else if (user1click === "Paper")
            userwin = compclick === "Scissor" ? false : true;
        else
            userwin = compclick === "Rock" ? false : true;

        winner(userwin, user1click, compclick);
    }
};


options.forEach((option) => {
    option.addEventListener("click", () => {
        const user1click = option.getAttribute("id");
        user1played.classList.remove("hide");
        user1played.innerText = user1click;
        gameplay(user1click);
    });
});