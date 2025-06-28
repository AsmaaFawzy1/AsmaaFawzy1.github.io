document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.show-answer');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            answer.classList.toggle('show');
        });
    });
});
