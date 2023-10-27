document.addEventListener('DOMContentLoaded', function () {
    // Get the current year and update the copyright text
    const currentYear = new Date().getFullYear();
    document.getElementById('copyrightYear').textContent = currentYear;

    // Get the date of the last modification of the document
    const lastModifiedTimestamp = document.lastModified;
    document.getElementById('lastModified').textContent = lastModifiedTimestamp;
});

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const darkmode = document.querySelector('.dark-mode')
const body = document.querySelector('body')
const a = document.querySelectorAll('a')
const header = document.querySelector('.header')
const donate = document.querySelector('.donate')
const joinus = document.querySelector('.join-us')
const nav = document.querySelector('.nav')
const section = document.querySelectorAll('section')
const footer = document.querySelector('footer')


darkmode.addEventListener("click", () => {
    if (darkmode.textContent.includes("Dark Mode⚫")) {
        darkmode.style.float = "right";
        darkmode.textContent = "Clear Mode⚪";
        darkmode.style.fontSize = ".8em";
        body.style.backgroundColor = '#577f7e';
        body.style.color = 'white';
        header.style.backgroundColor = '#2a8181';
        donate.style.backgroundColor = '#878564';
        joinus.style.backgroundColor = '#878564';
        nav.style.backgroundColor = '#878564';
        a.forEach((a) => {
            a.style.color = 'white'
        });
        section.forEach((section) => {
            section.style.backgroundColor = '#918e6d';
        });
        footer.style.backgroundColor = '#2a8181';
    } else {
        darkmode.style.float = "right";
        darkmode.textContent = "Dark Mode⚫";
        darkmode.style.fontSize = ".8em";
        body.style.backgroundColor = '#92CCCA';
        body.style.color = 'black';
        header.style.backgroundColor = '#41C2C2';
        donate.style.backgroundColor = '#BEBB8F';
        joinus.style.backgroundColor = '#BEBB8F';
        nav.style.backgroundColor = '#BEBB8F';
        a.forEach((a) => {
            a.style.color = 'black';
        });
        section.forEach((section) => {
            section.style.backgroundColor = '#D3CFA3';
        });
        footer.style.backgroundColor = '#41C2C2';
    }
});