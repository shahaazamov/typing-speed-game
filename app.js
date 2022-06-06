// const word = [
//     'abridgement',
//     'abridgements',
//     'abridger',
//     'pliers',
//     'plies',
//     'plight',
//     'plighted',
//     'salads',
//     'salal',
//     'salals',
//     'salamander',
//     'salamanders',
//     'salamandrine',
//     'hello',
//     'good',
//     'new',
//     'awesome',
// ]

const scoreCounter = document.querySelector('#scoreCounter')
const randomWordel = document.querySelector('#randomWord')
const input = document.querySelector('#input')
const timeEl = document.querySelector('#time')
input.focus()
const select = document.querySelector('#select')
const modalScore = document.querySelector('.modalScore')
const modal = document.querySelector('#modal')
const overlay = document.querySelector('#overlay')

const url = 'https://random-words-api.vercel.app/word'

let word 
let score = 0
let time = 10

let level
select.value = localStorage.getItem('level') !== null ? localStorage.getItem('level') : 'medium'

function getWord(){
    fetch(url).then((data)=>{
        return data.json()
    }).then(getData)
}
getWord()

function getData(word){
    randomWord = word[0].word.toLowerCase()
    randomWordel.textContent = randomWord
}
function setLevel(e){
    level = select.value
    localStorage.setItem('level',level)
}

input.addEventListener('input',()=>{
    if(randomWord == input.value){
        getWord()
        input.value=''
        score++
        scoreCounter.textContent == score 
    }
    if(level == 'hard'){
        time+=2
    }else if(level == 'medium'){
        time += 3
    }else{
        time+=5
    }
})
select.addEventListener('change',setLevel)

setInterval(()=>{
    if(time){
        time--
    timeEl.textContent = time
    if(time <= 0){
        clearInterval(time)
            
    }
    if(time <=7){
        timeEl.parentElement.style.color = 'green'
    }
    if(time <=5){
        timeEl.parentElement.style.color = 'red'
    }
    }
},1000)



// modal.classList.remove('hidden')
            // overlay.classList.remove('hidden')    
        // modalScore.textContent = score