let tog = 1;
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3');
let winSound = new Audio('winharpsichord-39642.mp3');

let p1sum = 0;
let p2sum = 0;
let p3sum = 0;
let p4sum = 0; // Agregar variable para p4

function play(player, psum, correction, num) {
    let sum;
    if (psum === 'p1sum') {
        p1sum = p1sum + num;
        if (p1sum > 100) {
            p1sum = p1sum - num;
        }
        // Manejo de posiciones especiales para p1sum
        if (p1sum === 1) p1sum = 38;
        if (p1sum === 4) p1sum = 14;
        if (p1sum === 8) p1sum = 30;
        if (p1sum === 21) p1sum = 42;
        if (p1sum === 28) p1sum = 76;
        if (p1sum === 32) p1sum = 10;
        if (p1sum === 36) p1sum = 6;
        if (p1sum === 48) p1sum = 26;
        if (p1sum === 50) p1sum = 67;
        if (p1sum === 62) p1sum = 18;
        if (p1sum === 71) p1sum = 92;
        if (p1sum === 80) p1sum = 99;
        if (p1sum === 88) p1sum = 24;
        if (p1sum === 95) p1sum = 56;
        if (p1sum === 97) p1sum = 78;
        sum = p1sum;
    } else if (psum === 'p2sum') {
        p2sum = p2sum + num;
        if (p2sum > 100) {
            p2sum = p2sum - num;
        }
        // Manejo de posiciones especiales para p2sum
        if (p2sum === 1) p2sum = 38;
        if (p2sum === 4) p2sum = 14;
        if (p2sum === 8) p2sum = 30;
        if (p2sum === 21) p2sum = 42;
        if (p2sum === 28) p2sum = 76;
        if (p2sum === 32) p2sum = 10;
        if (p2sum === 36) p2sum = 6;
        if (p2sum === 48) p2sum = 26;
        if (p2sum === 50) p2sum = 67;
        if (p2sum === 62) p2sum = 18;
        if (p2sum === 71) p2sum = 92;
        if (p2sum === 80) p2sum = 99;
        if (p2sum === 88) p2sum = 24;
        if (p2sum === 95) p2sum = 56;
        if (p2sum === 97) p2sum = 78;
        sum = p2sum;
    } else if (psum === 'p3sum') {
        p3sum = p3sum + num;
        if (p3sum > 100) {
            p3sum = p3sum - num;
        }
        // Manejo de posiciones especiales para p3sum
        if (p3sum === 1) p3sum = 38;
        if (p3sum === 4) p3sum = 14;
        if (p3sum === 8) p3sum = 30;
        if (p3sum === 21) p3sum = 42;
        if (p3sum === 28) p3sum = 76;
        if (p3sum === 32) p3sum = 10;
        if (p3sum === 36) p3sum = 6;
        if (p3sum === 48) p3sum = 26;
        if (p3sum === 50) p3sum = 67;
        if (p3sum === 62) p3sum = 18;
        if (p3sum === 71) p3sum = 92;
        if (p3sum === 80) p3sum = 99;
        if (p3sum === 88) p3sum = 24;
        if (p3sum === 95) p3sum = 56;
        if (p3sum === 97) p3sum = 78;
        sum = p3sum;
    } else if (psum === 'p4sum') { // Agregar lógica para p4sum
        p4sum = p4sum + num;
        if (p4sum > 100) {
            p4sum = p4sum - num;
        }
        // Manejo de posiciones especiales para p4sum
        if (p4sum === 1) p4sum = 38;
        if (p4sum === 4) p4sum = 14;
        if (p4sum === 8) p4sum = 30;
        if (p4sum === 21) p4sum = 42;
        if (p4sum === 28) p4sum = 76;
        if (p4sum === 32) p4sum = 10;
        if (p4sum === 36) p4sum = 6;
        if (p4sum === 48) p4sum = 26;
        if (p4sum === 50) p4sum = 67;
        if (p4sum === 62) p4sum = 18;
        if (p4sum === 71) p4sum = 92;
        if (p4sum === 80) p4sum = 99;
        if (p4sum === 88) p4sum = 24;
        if (p4sum === 95) p4sum = 56;
        if (p4sum === 97) p4sum = 78;
        sum = p4sum;
    }

    document.getElementById(`${player}`).style.transition = `linear all .5s`;

    if (sum < 10) {
        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`;
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`;
    } else if (sum === 100) {
        winSound.play();
        if (player === 'p1') {
            alert("Red Won!!");
        } else if (player === 'p2') {
            alert("Yellow Won!!");
        } else if (player === 'p3') {
            alert("Blue Won!!");
        } else if (player === 'p4') {
            alert("Green Won!!");
        }
        location.reload();
    } else {
        let numarr = Array.from(String(sum));
        let n1 = parseInt(numarr.shift(), 10);
        let n2 = parseInt(numarr.pop(), 10);

        if (n1 % 2 !== 0) {
            if (n2 === 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`;
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`;
            } else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`;
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`;
            }
        } else {
            if (n2 === 0) {
                document.getElementById(`${player}`).style.left = `${(0) * 62}px`;
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`;
            } else {
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`;
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`;
            }
        }
    }
}

// Handle dice roll and turn switching
document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play();
    let num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.getElementById("dice").innerText = num;

    if (tog % 4 === 1) {
        document.getElementById('tog').innerText = "Yellow's Turn : ";
        play('p1', 'p1sum', 0, num);
    } else if (tog % 4 === 2) {
        document.getElementById('tog').innerText = "Blue's Turn : ";
        play('p2', 'p2sum', 55, num);
    } else if (tog % 4 === 3){
        document.getElementById('tog').innerText = "Sky blue's Turn : ";
        play('p3', 'p3sum', 110, num);
    }
    else{
        document.getElementById('tog').innerText = "Red's Turn : ";
        play('p4', 'p4sum', 165, num);
    }

    tog += 1;
});
