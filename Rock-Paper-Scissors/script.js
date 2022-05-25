const handOption = {
    "rock": "/gallery/Rock.png",
    "paper": "/gallery/Paper.png",
    "scissors": "/gallery/Scissors.png"
}

let Score = 0;


const pickUserHand = (hand) => {
    // console.log("This is a ", hand)
    // hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    // show the next page with the hand you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set the user pick
    document.getElementById("userPickImage").src = handOption[hand];
    let cpHand = pickComputerHand();
    referee(hand, cpHand)

}


const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let cpHand = hands[Math.floor(Math.random() * hands.length)]
    // console.log("CPHAND", cpHand)
    // set the user pick
    document.getElementById("computerPickImage").src = handOption[cpHand];
    return cpHand;
    
}

const referee = (userHand, cpHand)=>{
    if (userHand == "paper" && cpHand == "scissors"){
        setDecision("YOU LOOSE")
    }
    
    if (userHand == "paper" && cpHand == "rock"){
        setDecision("YOU WIN")
        setScore(Score +1)
    }

    if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
      }
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(Score + 1);
      }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
      }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
      }
    if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
      }
    if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
      }
    if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(Score + 1);
      }
    };
    
    const restartGame = () => {
      let hands = document.querySelector(".hands");
      hands.style.display = "flex";
    
      let contest = document.querySelector(".contest");
      contest.style.display = "none";
    }
    
    const setDecision = (decision) => {
      document.querySelector(".decision h1").innerText = decision;
    }
    

    const setScore = (score) => {
        Score = score;
        document.querySelector(".score h1").innerText = score;
    }


 
