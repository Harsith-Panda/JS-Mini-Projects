const selected = document.querySelector('.container');
const ps_sel = document.querySelector('.ps');
const cs_sel = document.querySelector('.cs');
const res = document.querySelector('.res');

let player_score = 0;
let compter_score = 0;

selected.addEventListener('click', (e) => {
    let target = e.target;
    let c_selected = Math.round((Math.random() * 2) + 1);
    console.log(c_selected);
    if (target.id == c_selected) {
        res.innerHTML = "It's a tie !";
    } else if (target.id == 1 && c_selected == 2) {
        compter_score++;
        res.innerHTML = "Better Luck Next Time!";
    } else if (target.id == 2 && c_selected == 3) {
        compter_score++;
        res.innerHTML = "Better Luck Next Time!";
    } else if (target.id == 3 && c_selected == 1) {
        compter_score++;
        res.innerHTML = "Better Luck Next Time!";
    } else {
        player_score++;
        res.innerHTML = "Congrats, You Won!";
    }
    ps_sel.textContent = player_score.toString();
    cs_sel.textContent = compter_score.toString();
},false);

document.querySelector('button').addEventListener('click', () => {
    player_score = 0;
    compter_score = 0;
    ps_sel.textContent = player_score.toString();
    cs_sel.textContent = compter_score.toString();
    res.innerHTML = "Begin The Game!";
},false)