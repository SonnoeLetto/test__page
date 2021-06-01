document.querySelectorAll('.dropdown').forEach(function (dropdown__wrapper) {
    dropdown__wrapper.querySelector('.dropdown__btn').addEventListener('click', function () {
        dropdown__wrapper.querySelector('.dropdown__list').classList.toggle('dropdown__list--visible');
    });

    dropdown__wrapper.querySelectorAll('.dropdown__list-item').forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdown__wrapper.querySelector('.dropdown__btn').innerText = this.innerText;
            dropdown__wrapper.querySelector('.dropdown__btn').style.color = '#1D1D1F';
            dropdown__wrapper.querySelector('.dropdown__btn').classList.add('dropdown__btn-arr-none');
            dropdown__wrapper.querySelector('.dropdown__input-hidden').value = this.dataset.value;
            dropdown__wrapper.querySelector('.dropdown__list').classList.remove('dropdown__list--visible')
        })
    });

    document.addEventListener('click', function (e) {
        if (e.target !== dropdown__wrapper.querySelector('.dropdown__btn')) {
            dropdown__wrapper.querySelector('.dropdown__list').classList.remove('dropdown__list--visible')
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            dropdown__wrapper.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
        }
    });
});