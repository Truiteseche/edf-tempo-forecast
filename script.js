
const baseEndpoint = "https://www.api-couleur-tempo.fr/api";


const dayTypes = [
    "Tarif inconnu",
    "Jour bleu",
    "Jour blanc",
    "Jour rouge"
]
const colors = [
    {
        lighter: "white",
        darker: "whitesmoke",
        header: "#a8a8a8"
    },
    {
        lighter: "#2b67c9",
        darker: "#1057c8",
        header: "#0a3478"
    },
    {
        lighter: "white",
        darker: "whitesmoke",
        header: "#a8a8a8"
    },
    {
        lighter: "#ff6634",
        darker: "#e85130",
        header: "#b24724"
    }
]


function fetchTempoDay(day) {
    var requestOptions = {
        method: 'GET',
    };
    
    return fetch(`${baseEndpoint}/jourTempo/${day}`, requestOptions)
        .then(response => response.json())
        .catch(error => console.log("error", error));
}


function updateUI(dayId, data) {
    const dateDigits = document.querySelector(`#${dayId} .day-date .digits`);
    const dateMonth = document.querySelector(`#${dayId} .day-date .month`);
    const dayType = document.querySelector(`#${dayId} .day-type`);
    
    const date = new Date(data.dateJour);
    dateDigits.innerText = new Intl.DateTimeFormat('fr-FR', { day: '2-digit' }).format(date);
    dateMonth.innerText = new Intl.DateTimeFormat('fr-FR', { month: 'short' }).format(date);
    dayType.innerText = dayTypes[data.codeJour];

    const loadingAnimation = document.querySelector(`#${dayId} .loading`);
    loadingAnimation.classList.toggle("hidden", true);

    const dayWrapper = document.querySelector(`#${dayId} .day-wrapper`);
    dayWrapper.classList.toggle("hidden", false);

    const day = document.getElementById(dayId);
    day.style.setProperty("--lighter", colors[data.codeJour].lighter);
    day.style.setProperty("--darker", colors[data.codeJour].darker);
    day.style.setProperty("--header", colors[data.codeJour].header);

    if (data.codeJour % 2 === 0) {
        document.documentElement.style.setProperty("--font-color", "black");
    }
}

function refresh() {
    fetchTempoDay("today")
        .then((data) => {console.log("data:", data); updateUI("today", data)});
    fetchTempoDay("tomorrow")
        .then((data) => updateUI("tomorrow", data));
}

refresh();
