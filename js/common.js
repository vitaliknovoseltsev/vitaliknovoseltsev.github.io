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

