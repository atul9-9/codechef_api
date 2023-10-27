function getContest(){

    fetch('https://kontests.net/api/v1/code_chef')
    .then(response =>response.json())
    .then( data =>{
          console.log(data) ;
          displayContests(data) ;
    })

}


function displayContests(contests) {
    const contestListDiv = document.getElementById('contest-list');
    contestListDiv.innerHTML = '';

    contests.forEach(contest => {
        const contestDiv = document.createElement('div');
        contestDiv.classList.add('contest');
        contestDiv.innerHTML = `
            <h2>${contest.name}</h2>
            <p><strong>Start Date:</strong> ${contest.start_time}</p>
            <p><strong>End Date:</strong> ${contest.end_time}</p>
            <a href="${contest.url}" target="_blank">Go to Contest</a>
        `;
        contestListDiv.appendChild(contestDiv);
    });
}
// Fetch contests when the page loads
getContest();


