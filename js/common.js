const buttons = document.getElementsByTagName('button');
const form = document.getElementById('form');
const cross = document.getElementById('close-form');
const overlay = form.querySelector('.form-overlay');

const closeForm = () => {
    form.classList.remove('open');
}

for (const btn of buttons) {
    btn.addEventListener('click', () => {
        form.classList.add('open');
    });
}

cross.addEventListener('click', () => {
    closeForm();
});

overlay.addEventListener('click', () => {
    closeForm();
});

form.onsubmit = function(e) {
    e.preventDefault();

    const formData = new FormData(document.forms.contact);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "/url");
    xhr.send(formData);
    closeForm();
};

window.onload = () => {
    form.style.display = 'block';
    
    setTimeout(() => {
        document.getElementById('map').src = 'https://yandex.ru/map-widget/v1/?um=constructor%3A575029968e6a6d0d09de1cbed1a4d2b2a4f71330cf644ee357d65431d6c9489b&amp;source=constructor&amp;scroll=false';
    }, 3000);
}

