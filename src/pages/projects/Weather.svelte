<script>
    var cities = [];

    function getWeatherByCity(city) {
        const apiKey = "05e522a73297d0de70574b7913c4b9d8";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        if (cities.includes(city.toLowerCase())) {
            document.getElementById(
                "msg"
            ).textContent = `You already know the weather for ${city} ...otherwise be more specific by providing the country code as well 😉`;
            return;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => createWeatherCard(data))
            .catch((error) => {
                console.log(error);
                document.getElementById("msg").textContent =
                    "Please search for a valid city 😩";
            });
    }

    function createWeatherCard(data) {
        const { main, name, sys, weather } = data;

        cities.push(name.toLowerCase());

        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;

        const li = document.createElement("li");
        li.classList.add("city");
        const markup = `
    <h2 class="city-name" data-name="${name},${sys.country}">
        <span>${name}</span>
        <sup>${sys.country}</sup>
    </h2>
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
    </div>
    <figure>
        <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
        <figcaption>${weather[0]["description"]}</figcaption>
    </figure>
    `;
        li.innerHTML = markup;
        document.getElementById("cities").appendChild(li);
    }

    function search(e) {
        e.preventDefault();
        document.getElementById("msg").textContent = "";
        const city = document.getElementById("input-search").value;
        getWeatherByCity(city);
        document.getElementById("form-search").reset();
        document.getElementById("input-search").focus();
    }
</script>

<section class="top-banner">
    <div class="container">
        <h1 class="heading">Weather App</h1>
        <form id="form-search" on:submit={(e) => search(e)}>
            <input
                type="text"
                placeholder="Search for a city"
                id="input-search"
            />
            <button type="submit">Search</button>
            <span class="msg" id="msg" />
        </form>
    </div>
</section>
<section class="ajax-section">
    <div class="container">
        <ul class="cities" id="cities" />
    </div>
</section>

<style>
    :root {
        --bg_main: #0a1f44;
        --text_light: #fff;
        --text_med: #53627c;
        --text_dark: #1e2432;
        --red: #ff1e42;
        --darkred: #c3112d;
        --orange: #ff8c00;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: normal;
    }

    button {
        cursor: pointer;
    }

    input {
        -webkit-appearance: none;
    }

    button,
    input {
        border: none;
        background: none;
        outline: none;
        color: inherit;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    ul {
        list-style: none;
    }

    /* body {
        font: 1rem/1.3 "Roboto", sans-serif;
        background: var(--bg_main);
        color: var(--text_dark);
        padding: 50px;
    } */

    /*CUSTOM VARIABLES HERE*/

    .top-banner {
        color: var(--text_light);
    }

    .heading {
        font-weight: bold;
        font-size: 4rem;
        letter-spacing: 0.02em;
        padding: 0 0 30px 0;
    }

    .top-banner form {
        position: relative;
        display: flex;
        align-items: center;
    }

    .top-banner form input {
        font-size: 2rem;
        height: 40px;
        padding: 5px 5px 10px;
        border-bottom: 1px solid;
    }

    .top-banner form input::placeholder {
        color: currentColor;
    }

    .top-banner form button {
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 0.1em;
        padding: 15px 20px;
        margin-left: 15px;
        border-radius: 5px;
        background: var(--red);
        transition: background 0.3s ease-in-out;
    }

    .top-banner form button:hover {
        background: var(--darkred);
    }

    .top-banner form .msg {
        position: absolute;
        bottom: -40px;
        left: 0;
        max-width: 450px;
        min-height: 40px;
    }

    @media screen and (max-width: 700px) {
        .top-banner form {
            flex-direction: column;
        }

        .top-banner form input,
        .top-banner form button {
            width: 100%;
        }

        .top-banner form button {
            margin: 20px 0 0 0;
        }

        .top-banner form .msg {
            position: static;
            max-width: none;
            min-height: 0;
            margin-top: 10px;
        }
    }

    .ajax-section {
        margin: 50px 0 20px;
    }

    .ajax-section .cities {
        display: grid;
        grid-gap: 32px 20px;
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 1000px) {
        .ajax-section .cities {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 700px) {
        .ajax-section .cities {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 500px) {
        .ajax-section .cities {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    /*CUSTOM VARIABLES HERE*/

    .ajax-section .city {
        position: relative;
        padding: 40px 10%;
        border-radius: 20px;
        background: var(--text_light);
        color: var(--text_med);
    }

    .ajax-section .city::after {
        content: ’’;
        width: 90%;
        height: 50px;
        position: absolute;
        bottom: -12px;
        left: 5%;
        z-index: -1;
        opacity: 0.3;
        border-radius: 20px;
        background: var(--text_light);
    }

    .ajax-section figcaption {
        margin-top: 10px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .ajax-section .city-temp {
        font-size: 5rem;
        font-weight: bold;
        margin-top: 10px;
        color: var(--text_dark);
    }

    .ajax-section .city sup {
        font-size: 0.5em;
    }

    .ajax-section .city-name sup {
        padding: 0.2em 0.6em;
        border-radius: 30px;
        color: var(--text_light);
        background: var(--orange);
    }

    .ajax-section .city-icon {
        margin-top: 10px;
        width: 100px;
        height: 100px;
    }
</style>
