import {settings as s} from "./settings";
import {Player} from "./Player";

//déclaration de constante
const formElement = document.getElementById(s.playGameFormId)
const playerYou = new Player(s.defaultPlayerName1)
const playerMonster = new Player(s.defaultPlayerName2)
const players = [playerYou, playerMonster];
const nameInputElement = document.getElementById(s.nameInputElementId)
const divControlElement = document.querySelector(s.controlDivSelector)
const nameTitleElement = document.getElementById(s.playerNameId);
const actionButtonElements = document.querySelectorAll(s.actionsSelector)
const playerCardElements = document.querySelectorAll(s.players_container_selector)
const ulElement = document.querySelector(s.logContainerSelector)

//déclaration de variable

function updateName() {
    const trimmedName = nameInputElement.value.trim();
    if (trimmedName) {
        playerYou.name = trimmedName;
    }
}

function displayName() {
    nameTitleElement.textContent = playerYou.name;
}

function resetHealth() {
    players.forEach(player=>{
        player.health = s.healthMaxValue
    })
}

//déclaration de fonction
function startGame(e) {
    e.preventDefault()
    const trimmedName = nameInputElement.value.trim();
    updateName();
    resetHealth();
    displayLife();
    displayName();
    e.currentTarget.classList.add(s.hideElementClass)
    divControlElement.classList.remove(s.hideElementClass)
    ulElement.innerHTML = '';

}

//instruction
formElement.addEventListener('submit', (e) => {
    startGame(e)
})

function random(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function displayLife() {
    for (let i = 0; i < playerCardElements.length; i++) {
        playerCardElements[i].querySelector('progress').value = players[i].health
        playerCardElements[i].querySelector('label').textContent = s.remaining_life_message(players[i].health)
    }
}


function displayLastLog() {
    if (playerYou.health > playerMonster.health) {
        ulElement.insertAdjacentHTML("beforeend", s.lost_message(playerMonster.name))

    }else if (playerYou.health < playerMonster.health) {
        ulElement.insertAdjacentHTML("beforeend", s.lost_message(playerYou.name))
    } else {
        ulElement.insertAdjacentHTML('beforeend', s.tie_message())
    }
}

function endGame() {
    formElement.classList.remove(s.hideElementClass)
    divControlElement.classList.add(s.hideElementClass)
    displayLife()
}

function giveUp() {
    displayLastLog()
    endGame()
}

function play(e) {
    if (e.currentTarget.dataset.name === s.givUpName) {
        giveUp();
    } else {
        players.forEach((player) => {
            const randomActionNumber = random(0, s.actions[e.currentTarget.dataset.name].max_impact)
            if (player.health + randomActionNumber < 100) {
                player.health += randomActionNumber
            }
            if (player.health <=0){
                giveUp()
            }else {

                ulElement.insertAdjacentHTML("beforeend", s.actions[e.currentTarget.dataset.name].message(player, randomActionNumber))
            }
        })
    }
    displayLife();
}

actionButtonElements.forEach((button) => {
    button.addEventListener('click', (e) => {
        play(e)
    })
})

displayName()

