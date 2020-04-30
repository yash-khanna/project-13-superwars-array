const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = "";

    // Instead of forloop use Map method
    // Code here
    let i = 0;
    detailedPlayers = players.map(function (num) {
        let b = {
            name: num,
            image: "images/super-" + (i + 1) + ".png",
            strength: getRandomStrength(),
            type: (i % 2 == 0) ? "hero" : "villain"
        };
        i++;
        return b;
    });

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    let i = 0;
    players.map(function (num) {
        player = `<div class="player">
            <img src="${num.image}" alt="">
             <div class="name">${num.name}</div>
            <div class="strength">${num.strength}</div>
            </div>`
        console.log(player);
        if (num.type == type) {
            fragment += player;
        }
    });

    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}