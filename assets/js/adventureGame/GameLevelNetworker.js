// To build GameLevels, each contains GameObjects from below imports
import GamEnvBackground from './GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';
import Npc from './GameEngine/Npc.js';

class GameLevelNetworker {
  constructor(gameEnv) {
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_desert = path + "/images/gamify/desert.png"; // be sure to include the path
    const image_data_desert = {
        name: 'desert',
        greeting: "Welcome to the desert!  It is hot and dry here, but there are many adventures to be had!",
        src: image_src_desert,
        pixels: {height: 580, width: 1038}
    };


    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/chillguy.png"; // be sure to include the path
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
        id: 'Chill Guy',
        greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdom and adventure!",
        src: sprite_src_chillguy,
        SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/CHILLGUY_SCALE_FACTOR) }, 
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16 },
        downLeft: {row: 2, start: 0, columns: 3, rotate: -Math.PI/16 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        upLeft: {row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
        upRight: {row: 1, start: 0, columns: 3, rotate: -Math.PI/16 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

    


    // NPC data for Tux 
    const sprite_src_tux = path + "/images/gamify/tux.png";
    const sprite_greet_tux = "Hi I am Tux, the Linux mascot. I am very happy to spend some linux shell time with you!";
    const sprite_data_tux = {
        id: 'Tux',
        greeting: sprite_greet_tux,
        src: sprite_src_tux,
        SCALE_FACTOR: 8,
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 352},
        INIT_POSITION: { x: (width / 2), y: (height / 2)},
        orientation: {rows: 8, columns: 11 },
        down: {row: 5, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        dialogues: [
            "Hello, traveler! i am Tux, the Linux mascot, and my systems are used everywhere, including the internet. One of the key pieces of the internet is networking, which allows computers to communicate with each other. Do you want to learn about it? If so, interact with me again!",
            "When you send data over the internet, your data is split into small pieces called packets.",
            "Each packet contains not only the data you're sending but also important information like the destination address and the source address.",
            "These packets travel through various routers, which are like traffic directors that help guide the packets, and switches across the internet to reach their destination.",
            "Let's practice networking concepts! Talk to another NPC for some quiz questions about networking.",
        ],
        reaction: function() {
            // Use dialogue system instead of alert
            if (this.dialogueSystem) {
                this.showReactionDialogue();
            } else {
                console.log(sprite_greet_tux);
            }
        },
        interact: function() {
            // Show random dialogue message
            if (this.dialogueSystem) {
                this.showNextDialogue();
            }
        }
    };

    const sprite_src_quizzler = path + "/images/gamify/tux.png";
    const sprite_greet_quizzler = "Hi I am Quizzler, the networking expert. I am very happy to help you learn about networking!";
    const sprite_data_quizzler = {
        id: 'Quizzler',
        greeting: sprite_greet_quizzler,
        src: sprite_src_quizzler,
        SCALE_FACTOR: 8,
        ANIMATION_RATE: 50,
        pixels: {height: 256, width: 352},
        INIT_POSITION: { x: (width / 4), y: (height / 4)},
        orientation: {rows: 8, columns: 11 },
        down: {row: 5, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        dialogues: [
            "True or False: The Internet is a network of networks",
            "True! The Internet is a global network of interconnected networks that use the standard Internet Protocol Suite (TCP/IP) to link devices worldwide.",
            "True or False: A router is a device that forwards data packets between computer networks",
            "True!",
            "True or False: Some devices on the internet do not have an IP address",
            "False! Every device connected to the internet must have a unique IP address to communicate with other devices.",
            "True or False: Domain names are not related to IP addresses",
            "False! Domain names are human-readable addresses that are translated into IP addresses by the Domain Name System (DNS) to locate and access websites on the internet.",
            "Great job on the quiz! Feel free to review the material with Tux or explore the desert for more adventures!"
        ],
        reaction: function() {
            // Use dialogue system instead of alert
            if (this.dialogueSystem) {
                this.showReactionDialogue();
            } else {
                console.log(sprite_greet_quizzler);
            }
        },
        interact: function() {
            // Show random dialogue message
            if (this.dialogueSystem) {
                this.showNextDialogue();
            }
        }
    };

    // List of objects defnitions for this level
    this.classes = [
      { class: GamEnvBackground, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_tux },
      { class: Npc, data: sprite_data_quizzler }
    ];
  }

}

export default GameLevelNetworker;