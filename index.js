let compchoose = ["rock", "paper", 'scissors']
let score1 = 0
let score2 = 0
const reset = () =>{
    para.textContent = "score: 0 - 0"
    playagain.setAttribute('style', "display: none")
    score1= 0
    score2 = 0
}
const container = document.querySelector('#container')
const rockpic = document.querySelector('#PCrock')
const scissorpic = document.querySelector('#PCscissor')
const rockbtn = document.querySelector('#rock')
const scissorbtn = document.querySelector('#scissors')
const paperbtn = document.querySelector('#paper')
const para = document.querySelector('#score')
const playagain = document.querySelector('button')
const scoreDiv = document.querySelector('#score-div')
const compChoice = document.createElement('h1')
const info = document.querySelector('#info')
let state = false
scoreDiv.append(compChoice)
playagain.addEventListener('click', reset)
let playerSelection = ''
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
const computerChoice = () =>{ 
    let play = compchoose[Math.floor(Math.random() * 3)]
    return play
}
rockbtn.onclick = () => {
    playerSelection="rock"
    computerChoice()
    if(score1 >= 5){
        playagain.setAttribute('style', "display: block")
        para.textContent = `congratulation you won with the score of ${score1} - ${score2}`
        compChoice.textContent = ''
    }else if(score2 >=5 ){
        playagain.setAttribute('style', "display: block")
        para.textContent = `you lost with the score of ${score1} - ${score2}`
        compChoice.textContent = ''
    }else{
        playRound(computerChoice(), playerSelection)
    }
}
recognition.addEventListener('result', (e) => {
    const transscipt = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
          let correction = transscipt.toLocaleLowerCase();
         console.log(correction)
          if(e.results[0].isFinal){
            if(score1== 5){
                playagain.setAttribute('style', "display: block")
                para.textContent = `congratulation you won with the score of ${score1} - ${score2}`
                compChoice.textContent = ''
            }else if(score2 ==5  ){
                playagain.setAttribute('style', "display: block")
                para.textContent = `you lost with the score of ${score1} - ${score2}`
                compChoice.textContent = ''
            }else if(correction.includes('rock')){
                        computerChoice()
                        state = true
                        playerSelection="rock"
                    }else if(correction.includes("paper")){
                        computerChoice()
                        state = true
                        playerSelection="paper"
                    }else if(correction.includes("scissors")){
                        computerChoice()
                        state = true
                        playerSelection="scissors"
                    }else{
                        return 
                    }
                    if(state){
                        playRound(computerChoice(), playerSelection)
                    }
          }
          
       
  })
  recognition.start()
recognition.addEventListener('end', recognition.start)
scissorbtn.onclick = () =>{
    playerSelection="scissors"
    computerChoice()
    if(score1 >= 4){
        playagain.setAttribute('style', "display: block")
        para.textContent = `congratulation you won with the score of ${score1} - ${score2}`
        compChoice.textContent = ''
    }else if(score2 >=4 ){
        playagain.setAttribute('style', "display: block")
        para.textContent = `you lost with the score of ${score1} - ${score2}`
        compChoice.textContent = ''
    }else{
        playRound(computerChoice(), playerSelection)
    }
}
paperbtn.onclick = () =>{
    playerSelection="paper"
    computerChoice()
    if(score1 >= 5){
        playagain.setAttribute('style', "display: block")
        para.textContent = `congratulation you won with the score of ${score1} - ${score2}`
        compChoice.textContent = ''
    }else if(score2 >=5 ){
        playagain.setAttribute('style', "display: block")
        para.textContent = `you lost with the score of ${score1} - ${score2}`
        compChoice.textContent = ''
    }else{
        playRound(computerChoice(), playerSelection)
    }
}

const playRound  = (computerChoice,playerSelection) => {
    console.log(computerChoice)
    info.setAttribute('style', "display: none")
    
    if(playerSelection === computerChoice){
        compChoice.textContent = `computers choice was ${computerChoice}`   
    }else if(playerSelection == "scissors" && computerChoice === "paper"){
        compChoice.textContent = `computers choice was ${computerChoice}`
        para.textContent = `score: ${++score1} - ${score2}`
    }else if(playerSelection == "paper" && computerChoice === "rock"){
        compChoice.textContent = `computers choice was ${computerChoice}`
  
        para.textContent = `score: ${++score1} - ${score2}`
    }else if(playerSelection == "rock" && computerChoice === "scissors"){
        compChoice.textContent = `computers choice was ${computerChoice}`
  
        para.textContent = `score: ${++score1} - ${score2}`
    }else if(playerSelection == "scissors" && computerChoice === "rock"){
        compChoice.textContent = `computers choice was ${computerChoice}`

        para.textContent = `score: ${score1} - ${++score2}`
    }else if(playerSelection == "paper" && computerChoice === "scissors"){
        compChoice.textContent = `computers choice was ${computerChoice}`

        para.textContent = `score: ${score1} - ${++score2}`
    }else if(playerSelection == "rock" && computerChoice === "paper"){
        compChoice.textContent = `computers choice was ${computerChoice}`

        para.textContent = `score: ${score1} - ${++score2}`
    }
}
