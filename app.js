
//Update data function total stats
    let totalCases       = document.getElementById("totalCases")
    let activeCases      = document.getElementById("activeCases")
    let totalRecovered   = document.getElementById("totalRecovered")
    let totalDeaths      = document.getElementById("totalDeaths")

//New confirmed
    let newConfirmed = document.getElementById("newConfirmed")
    let newCases     = document.getElementById("newCases")
    let newRecovered = document.getElementById("newRecovered")
    let newDeaths    = document.getElementById("newDeaths")

//Top four affected countries
    let usa    = document.getElementById("usa")
    let india  = document.getElementById("india")
    let brazil = document.getElementById("brazil")
    let russia = document.getElementById("russia")


let url =  "https://api.covid19api.com/summary";
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState ==4 && this.status == 200){
        let covidData = JSON.parse(this.responseText)

        //total cases data
        totalCases.innerHTML     = covidData.Global.TotalConfirmed;
        activeCases.innerHTML    = covidData.Global.TotalConfirmed - covidData.Global.TotalRecovered;
        totalRecovered.innerHTML = covidData.Global.TotalRecovered;
        totalDeaths.innerHTML    = covidData.Global.TotalDeaths;

        //new cases data
        newConfirmed.innerHTML = `+${covidData.Global.NewConfirmed}`;
        newCases.innerHTML     = `+${covidData.Global.NewConfirmed - covidData.Global.NewRecovered}`
        newRecovered.innerHTML = `+${covidData.Global.NewRecovered}`;
        newDeaths.innerHTML    = `+${covidData.Global.NewDeaths}`;
    }
}

xhttp.open("GET", url, true);
xhttp.send();

let xhttp2 = new XMLHttpRequest()
xhttp2.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let usaData = JSON.parse(this.responseText)
        console.log(usaData) 
    }
}
xhttp2.open("GET", "https://api.covid19api.com/countries/united-states", true)
xhttp2.send()