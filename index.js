const home = document.querySelector('.home');
const Home = document.querySelector('.Home');
const contact = document.querySelector('.contact');
const Contact = document.querySelector('.Contact');
const information = document.querySelector('.information');
const Information = document.querySelector('.Information');
const guide = document.querySelector('.guide');
const Guide = document.querySelector('.Guide');
home.style.color = 'rgb(151, 181, 218)';
contact.style.color = 'white';
information.style.color = 'white';
guide.style.color = 'white';
home.style.borderColor = 'rgb(151, 181, 218)';
Contact.style.display = 'none';
Contact.style.visibility = 'hidden';
Information.style.display = 'none';
Information.style.visibility = 'hidden';
Guide.style.display = 'none';
Guide.style.visibility = 'hidden';
home.addEventListener('click', () => {
    Home.style.display = 'block';
    Home.style.visibility = 'visible';
    home.style.borderColor = 'rgb(151, 181, 218)';
    home.style.color = 'rgb(151, 181, 218)';
    Contact.style.display = 'none';
    Contact.style.visibility = 'hidden';
    Information.style.display = 'none';
    Information.style.visibility = 'hidden';
    Guide.style.display = 'none';
    Guide.style.visibility = 'hidden';
    contact.style.borderColor = 'rgb(168, 167, 167)';
    contact.style.color = 'white';
    information.style.borderColor = 'rgb(168, 167, 167)';
    information.style.color = 'white';
    guide.style.borderColor = 'rgb(168, 167, 167)';
    guide.style.color = 'white';

})
contact.addEventListener('click', () => {
    Contact.style.display = 'block';
    Contact.style.visibility = 'visible';
    Home.style.display = 'none';
    Home.style.visibility = 'hidden';
    Information.style.display = 'none';
    Information.style.visibility = 'hidden';
    Guide.style.display = 'none';
    Guide.style.visibility = 'hidden';
    contact.style.borderColor = 'rgb(151, 181, 218)';
    contact.style.color = 'rgb(151, 181, 218)';
    home.style.borderColor = 'rgb(168, 167, 167)';
    home.style.color = 'white';
    information.style.borderColor = 'rgb(168, 167, 167)';
    information.style.color = 'white';
    guide.style.borderColor = 'rgb(168, 167, 167)';
    guide.style.color = 'white';
})
information.addEventListener('click', () => {
    Information.style.display = 'block';
    Information.style.visibility = 'visible';
    Contact.style.display = 'none';
    Contact.style.visibility = 'hidden';
    Home.style.display = 'none';
    Home.style.visibility = 'hidden';
    Guide.style.display = 'none';
    Guide.style.visibility = 'hidden';
    information.style.borderColor = 'rgb(151, 181, 218)';
    information.style.color = 'rgb(151, 181, 218)';
    home.style.borderColor = 'rgb(168, 167, 167)';
    home.style.color = 'white';
    contact.style.borderColor = 'rgb(168, 167, 167)';
    contact.style.color = 'white';
    guide.style.borderColor = 'rgb(168, 167, 167)';
    guide.style.color = 'white';
})
guide.addEventListener('click', () => {
    Guide.style.display = 'block';
    Guide.style.visibility = 'visible';
    Information.style.display = 'none';
    Information.style.visibility = 'hidden';
    Contact.style.display = 'none';
    Contact.style.visibility = 'hidden';
    Home.style.display = 'none';
    Home.style.visibility = 'hidden';
    guide.style.borderColor = 'rgb(151, 181, 218)';
    guide.style.color = 'rgb(151, 181, 218)';
    home.style.borderColor = 'rgb(168, 167, 167)';
    home.style.color = 'white';
    contact.style.borderColor = 'rgb(168, 167, 167)';
    contact.style.color = 'white';
    information.style.borderColor = 'rgb(168, 167, 167)';
    information.style.color = 'white';
})