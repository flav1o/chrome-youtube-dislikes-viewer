import config from './config.js';
import statistics from './statistics.js';

let data = async (videoId) => {
	let url = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${config.api_key}`;
	let request = await fetch(url);
	let data = await request.json(request);

	if (data.items.length > 0) {
		document
			.getElementsByClassName('actions-wraper')[0]
			.insertAdjacentHTML("afterend", statistics(data));
	} else {
		console.log("error");
	}
}

document.getElementById('bt_search')
	.addEventListener('click', () => {
		const previousStats = document.getElementsByClassName('statistics-wraper')[0]
		const url = document.getElementById('input_url').value;
		
		if(previousStats) previousStats.remove();
		if (url.length > 0) data(url);
		
	});