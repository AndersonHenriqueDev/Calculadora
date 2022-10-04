let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.getElementsByClassName.color = " rgba(150, 150, 150, 0.87)";
})

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Quando o botão clicado não é apagado
        if (!btn.id.match('erase')) {
            // Para exibir o valor pressionar o btn
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');
            // Para avaliar a resposta em tempo real
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        
    }
    // Quando o botão apagar é clicado
    if (btn.id.match('erase')) {
        realTimeScreenValue.pop();
        currentInput.innerHTML = realTimeScreenValue.join('');
        answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
    }
    // Quando clicado o botão é avaliado
    if (btn.id.match('evaluate')) {
        currentInput.className = 'answerScreen';
        answerScreen.className = 'currentInput';
        answerScreen.getElementsByClassName.color = "white";
    }
    // Para evitar erro indefinido na tela
    if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
        answerScreen.innerHTML = 0
    }
    })
})
