/* Sort media */
const list = document.querySelector('.media_title_right'),
	  items = document.querySelectorAll('.media_block'),
	  listItems = document.querySelectorAll('.media_item')

function filter() {
	list.addEventListener('click', event => {
		const targetId = event.target.dataset.id
		const target = event.target

		if (target.classList.contains('media_item')) {
			listItems.forEach(listItem => listItem.classList.remove('media_btn_active'))
			target.classList.add('media_btn_active')
		}

		switch(targetId) {
			case 'screen':
				getItems(targetId)
				break
			case 'art':
				getItems(targetId)
				break
			case 'video':
				getItems(targetId)
				break
		}
	})
}

filter()

function getItems(className) {
	items.forEach(item => {
		if (item.classList.contains(className)) {
			item.style.display = 'block'
		} else {
			item.style.display = 'none'
		}
	})
}