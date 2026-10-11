const buttons = document.querySelectorAll('.category-nav button');

const sections = [
    document.querySelector('#support'),
    document.querySelector('#activity'),
    document.querySelector('#etc')
];

buttons.forEach(function(button, index) {

    button.addEventListener('click', function() {

        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        sections.forEach(function(section) {
            section.hidden = true;
        });

        sections[index].hidden = false;

    });

});