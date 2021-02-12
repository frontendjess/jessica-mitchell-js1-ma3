const baseUrl = '';

async function getGames(url) {
	try {
		const response = await fetch(
			'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating'
		);
		const jsonResult = await response.json();
		const res = jsonResult.results;
		console.log(res);

		for (let i = 0; i < res.length; i++) {
			if (i === 8) {
				break;
			}

			document.querySelector('#games').innerHTML += `
		        <div class="card">
		            <p>Game: ${res[i].name}</p>
                    <p>Rating: ${res[i].rating}</p>
                    <p># of tags: ${res[i].tags.length}</p>
		        </div>
		    `;
		}

		document.querySelector('#loadingGif').innerHTML += `
            <img class="loadingGif" src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif">
        `;
	} catch (error) {
		// show the user some error
		document.querySelector('#alert').innerHTML = showAlertTouser(
			'An Error occured',
			'danger'
		);
	} finally {
		// you can finally do something here like hide the loading gif
		// It is optional
		setTimeout(function () {
			document.querySelector('#loadingGif').innerHTML = '';
		}, 2000);
	}
}

getGames(baseUrl);
