const userName = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
};
userName.input.addEventListener('input', onInputListener);

function onInputListener(event) {
    const trimmedValue = userName.input.value.trim();
    userName.output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;

};