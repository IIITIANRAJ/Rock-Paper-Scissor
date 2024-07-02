const result = document.querySelector('.result')
const buttons = document.querySelectorAll('.buttons')
const game = document.querySelector('.game')
let list = ["ROCK","PAPER","SCISSOR"]
let newPara = document.createElement('p')
let newDiv = document.createElement('div')
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let randomIndex = Math.floor(Math.random() * 3)
        if(e.target.id == list[randomIndex]){
            newPara.innerHTML = 'Draw'
        }
        else if(e.target.id == 'ROCK'){
            if(randomIndex == 1){
                newPara.innerHTML = 'Computer Wins'
            }
            else{
                newPara.innerHTML = 'You Wins'
            }
        }
        else if(e.target.id == 'PAPER'){
            if(randomIndex == 2){
                newPara.innerHTML = 'Computer Wins' 
            }
            else{
                newPara.innerHTML = 'You Wins' 
            }
        }
        else{
            if(randomIndex == 0){
                newPara.innerHTML = 'Computer Wins'
            }
            else{
                newPara.innerHTML = 'You Wins'
            }
        }
        newDiv.innerHTML = `COMPUTER:<br> ${list[randomIndex]}`
        if(randomIndex === 0){
            newDiv.style.backgroundColor = 'rgba(165, 42, 42, 0.679)'
        }
        else if(randomIndex === 1){
            newDiv.style.backgroundColor = 'rgba(255, 235, 205, 0.954)'
        }
        else{
            newDiv.style.backgroundColor = 'rgba(0, 81, 255, 0.846)'
        }
        newDiv.classList.add('Computer')
        game.appendChild(newDiv)
        result.appendChild(newPara)
        setTimeout(()=>{
           game.removeChild(newDiv)
           result.removeChild(newPara)
        },2000)
    })
})
