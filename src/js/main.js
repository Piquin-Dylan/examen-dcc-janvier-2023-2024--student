import {settings} from './settings';
import {Player} from './Player';

const game = {
    controlElement: document.querySelector(settings.controlDivSelector),
    /**
     * This function is called when the page is loaded.
     */
    init() {
        this.playerElements = document.querySelectorAll(settings.players_container_selector);
        this.logElement = document.querySelector(settings.logContainerSelector);
        this.form = document.getElementById(settings.playGameFormId);
        this.addEventListeners();
        //this.players = [new...., new....];
    },
    /**
     * This function add event listeners to the form and buttons.
     */
    addEventListeners() {

    },
    /**
     * This function is called when a button is clicked.
     */
    play(event) {

    },
    /**
     * This function check if a player has won.
     */
    checkForWinner(player) {

    },
    /**
     * This function display the remaining life of a player.
     */
    displayRemainingLife(player) {
     
    },
    /**
     * This function clear the logs.
     */
    clearLogs() {

    },
    end(player) {

    },
    /**
     * This function is called when the form is submitted.
     */
    start(event) {

    },
    /**
     * This function display the progress bar.
     */
    displayProgress() {

    },
    /**
     * This function return a random number between 0 and max.
     */
    random(max) {

    },
};

game.init();
