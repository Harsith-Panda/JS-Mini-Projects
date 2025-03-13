console.log("Working!")
const c1 = document.querySelector(".cl1");
const c2 = document.querySelector('.cl2');
const c3 = document.querySelector('.cl3');
const c4 = document.querySelector('.cl4');
const c5 = document.querySelector('.cl5');

c1.addEventListener('click', () => {
    document.querySelector('.bg-cl').style.backgroundColor = 'red';
})
c2.addEventListener('click', () => {
    document.querySelector('.bg-cl').style.backgroundColor = 'grey';
})
c3.addEventListener('click', () => {
    document.querySelector('.bg-cl').style.backgroundColor = 'yellow';
})
c4.addEventListener('click', () => {
    document.querySelector('.bg-cl').style.backgroundColor = 'olive';
})
c5.addEventListener('click', () => {
    document.querySelector('.bg-cl').style.backgroundColor = 'white';
})