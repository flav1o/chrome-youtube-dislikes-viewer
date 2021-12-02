function displayData(data) {
	return `
    <div class="statistics-wraper">
        <div class="statistics-item">
            <img src="./assets/icons/upvoted.svg" alt="">
            <span>${data.items[0].statistics.likeCount}</span>
        </div>
        <div class="statistics-item">
            <img src="./assets/icons/downvoted.svg" alt="">
            <span>${data.items[0].statistics.dislikeCount}</span>
        </div>
        <div class="statistics-item">
            <img src="./assets/icons/views.svg" alt="">
            <span>${data.items[0].statistics.viewCount}</span>
        </div>
    </div>`;
}

export default displayData;
