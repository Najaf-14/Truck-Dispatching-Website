const btn = document.querySelector('#learnBtn');
const extraText = document.querySelector('.extra-text-about');

btn.addEventListener('click', function (e) {
    e.preventDefault();

    extraText.classList.toggle('show');

    if (extraText.classList.contains('show')) {
        btn.textContent = 'Show Less';
    } else {
        btn.textContent = 'Learn More';
    }
});