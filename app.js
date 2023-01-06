
//Update data function total statistics
    let totalCases       = document.getElementById("totalCases");
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

    
//usa cases
        let usaTotalCases  = document.getElementById("usaTotalCases")
        let usaActiveCases = document.getElementById("usaActiveCases")
        let usaRecovered   = document.getElementById("usaRecovered")
        let usaTotalDeaths = document.getElementById("usaTotalDeaths")

//New confirmed
        let usaNewConfirmed = document.getElementById("usaNewConfirmed")
        let usaNewCases     = document.getElementById("usaNewCases")
        let usaNewRecovered = document.getElementById("usaNewRecovered")
        let usaNewDeaths    = document.getElementById("usaNewDeaths")        

//Date
        let date  = document.getElementById("date")
        let date2 = document.getElementById("date2")     


let url =  "https://api.covid19api.com/summary";
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState ==4 && this.status == 200){
        let covidData = JSON.parse(this.responseText)

        //total cases data
        totalCases.innerHTML     = Number(covidData.Global.TotalConfirmed).toLocaleString();
        activeCases.innerHTML    = Number(covidData.Global.TotalConfirmed - covidData.Global.TotalRecovered).toLocaleString();
        totalRecovered.innerHTML = Number(covidData.Global.TotalRecovered).toLocaleString();
        totalDeaths.innerHTML    = Number(covidData.Global.TotalDeaths).toLocaleString();

        //new cases data
        newConfirmed.innerHTML = `+${Number(covidData.Global.NewConfirmed).toLocaleString()}`;
        newCases.innerHTML     = `+${Number(covidData.Global.NewConfirmed - covidData.Global.NewRecovered).toLocaleString()}`
        newRecovered.innerHTML = `+${Number(covidData.Global.NewRecovered).toLocaleString()}`;
        newDeaths.innerHTML    = `+${Number(covidData.Global.NewDeaths).toLocaleString()}`;

        //top states
        usa.innerHTML    = Number(covidData.Countries[179].TotalConfirmed).toLocaleString();
        india.innerHTML  = Number(covidData.Countries[76].TotalConfirmed).toLocaleString();
        brazil.innerHTML = Number(covidData.Countries[23].TotalConfirmed).toLocaleString();
        russia.innerHTML = Number(covidData.Countries[139].TotalConfirmed).toLocaleString();

        //usa cases
        usaTotalCases.innerHTML  = Number(covidData.Countries[179].TotalConfirmed).toLocaleString();
        usaActiveCases.innerHTML = Number(covidData.Countries[179].TotalConfirmed - covidData.Countries[179].TotalRecovered).toLocaleString();
        usaRecovered.innerHTML   = Number(covidData.Countries[179].TotalRecovered).toLocaleString();
        usaTotalDeaths.innerHTML = Number(covidData.Countries[179].TotalDeaths).toLocaleString();
        usaNewCases.innerHTML    = Number(covidData.Countries[179].NewConfirmed).toLocaleString();
        usaNewDeaths.innerHTML   = Number(covidData.Countries[179].NewDeaths).toLocaleString();

        // date
        let dateTrim = covidData.Date
        dateTrim = dateTrim.split("T")[0]
        date.innerHTML = `Updated: ${dateTrim}`;

        // date2
        let dateTrim2 = covidData.Date
        dateTrim2 = dateTrim2.split("T")[0]
        date2.innerHTML = `Updated: ${dateTrim2}`;
    }
}

xhttp.open("GET", url, true);
xhttp.send();


//second request
let xhttp2 = new XMLHttpRequest()
xhttp2.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText)
        console.log(data.Date)


    }
}
xhttp2.open("GET", "https://api.covid19api.com/summary", true)
xhttp2.send()