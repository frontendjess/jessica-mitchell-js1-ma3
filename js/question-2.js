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
		    <p>${res[i].name}</p>
            <p>${res[i].rating}</p>
            <p>${res[i].tags.length}</p>
		</div>
		  `;
		}
	} catch (error) {
		// show the user some error
	} finally {
		// you can finally do something here like hide the loading gif
		// It is optional
	}
}

getGames(baseUrl);
