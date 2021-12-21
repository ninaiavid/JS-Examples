let width = 800;
let height = 200;
let groundX = 0;
let dinoY = 0;
let obstacles = [["cactus-big-3", 100], ["cactus-small-1", 0], ["cactus-big-2", 400], ["cactus-small-3", 300], ["cactus-small-5", 600]]

/*function showObstacles() {
    for (let i = 0; i < obstacles.length; i++){
        map.innerHTML += `<div class="${obstacles[i][0]}" style="left: ${obstacles[i][1]}px"></div>`
    }
}*/
function showObstacles() {
    obstacles.forEach((obstacle) => 
    map.innerHTML += `<div class="${obstacle[0]}" style="left: ${obstacle[1]}px"></div>` )  
}

function showDino() {
    map.innerHTML += `<div class="dino"></div>`
}

showObstacles()
showDino()
function moveGround () {
    ground.style = `background-position: ${groundX}px -89px`
    groundX-=1
}

//setInterval(moveGround, 20 )