const userName = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
};
userName.input.addEventListener('input', onInputListener);

function onInputListener(event) {
    userName.output.textContent = event.currentTarget.value || 'Anonymous';

};