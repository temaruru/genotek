document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.querySelectorAll('.c-list--block__trigger');
    const content = document.querySelectorAll('.c-list--block__content');

    trigger.forEach((el, index) => el.addEventListener('click', function () {
        content[index].classList.toggle('active');
        trigger[index].classList.toggle('active');
    }));
});