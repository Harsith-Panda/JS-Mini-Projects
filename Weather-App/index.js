// selectors
const btn = document.querySelector('.c-sub');
const temp = document.querySelector('.temp');
const icon = document.querySelector('.icon');
const sky = document.querySelector('.sky');

async function get(city) {
    try {
        let key = "";
        let response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${key}`);
        if (!response.ok) {
            throw new Error("Not Correct");
        }
        let data = await response.json();
        temp.innerHTML = data['data'][0]['temp']
        sky.innerHTML = data['data'][0]['weather']['description']
        icon.innerHTML = ""
    } catch (e) {
        icon.innerHTML = "Error Occurred!!";
        temp.innerHTML = -1
        sky.innerHTML = -1
    }
}

btn.addEventListener('click' ,async (event) => {
    event.preventDefault();
    const value = document.querySelector('.city').value;
    await get(value);
},false);