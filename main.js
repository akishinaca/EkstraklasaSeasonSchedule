
const URL= './schedule.json'


async function getapi(url) {

    const tableBody = document.querySelector(".tbody")
    
    const response = await fetch(url);
    
    const data = await response.json();

    const scheduleArray = data.schedules
    
    scheduleArray.forEach(element => {
       const teamOne = element.sport_event.competitors[0].name;
       const teamTwo = element.sport_event.competitors[1].name;
       const scoreOne = element.sport_event_status.home_score;
       const scoreTwo = element.sport_event_status.away_score;

       const rowElement = document.createElement('tr');
       const teamsCell = document.createElement('td')
       const scoreCell = document.createElement('td')

    
       rowElement.appendChild(teamsCell)
       rowElement.appendChild(scoreCell)

       teamsCell.textContent = `${teamOne} vs. ${teamTwo}`
       scoreCell.textContent = `${scoreOne} : ${scoreTwo}`

       if(element.sport_event_status.match_status == "postponed"){
            scoreCell.textContent = 'Postponed'
       }
       tableBody.appendChild(rowElement)
       
       });
    }


getapi(URL);
