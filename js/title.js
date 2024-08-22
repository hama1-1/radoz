// Adding the show class to elements with a delay for animation effect
window.onload = function() {
    document.getElementById('title').classList.add('show');
    document.getElementById('description').classList.add('show');
    setTimeout(() => document.getElementById('action1').classList.add('show'), 500);
    setTimeout(() => document.getElementById('action2').classList.add('show'), 1000);
    setTimeout(() => document.getElementById('action3').classList.add('show'), 1500);
};
