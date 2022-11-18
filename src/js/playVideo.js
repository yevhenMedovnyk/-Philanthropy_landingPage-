const videoArea = document.querySelector('.bottom-look__video');

videoArea.addEventListener('click', () => {
	playVideo()
})

const playVideo = () => {

	if (videoArea.classList.contains('active')) {
		return
	};

	videoArea.classList.add('active');

	videoArea.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/xsh5TCTc-vk?autoplay=1" title=\"YouTube video player"\
	frameborder=\"0"\
	allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\
	allowfullscreen></iframe>')
}


