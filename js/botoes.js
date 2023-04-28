document.addEventListener("DOMContentLoaded", function() {
    const checkbox1 = document.getElementById("answer1");
    const checkbox2 = document.getElementById("answer2");
    const checkbox3 = document.getElementById("answer3");
    const checkbox4 = document.getElementById("answer4");
    const submitBtn = document.getElementById("submitBtn");


    // Adicionar listener de evento às caixas de seleção
    checkbox1.addEventListener("change", habilitarBotao);
    checkbox2.addEventListener("change", habilitarBotao);
    checkbox3.addEventListener("change", habilitarBotao);
    checkbox4.addEventListener("change", habilitarBotao);

    // Função para habilitar o botão se pelo menos uma caixa de seleção estiver marcada
    function habilitarBotao() {
        if (checkbox1.checked || checkbox2.checked || checkbox3.checked || checkbox4.checked) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    // Selecionar todos os elementos form-check-input do tipo radio
    const radioInputs = document.querySelectorAll('.form-check-input[type=radio]');

    // Adicionar event listener para o evento click no documento
    document.addEventListener('click', function(event) {
        // Verificar se o elemento clicado não é um form-check-input
        if (!event.target.matches('.form-check-input')) {
            // Desmarcar todos os elementos form-check-input do tipo radio
            radioInputs.forEach(function(input) {
                input.checked = false;
                submitBtn.disabled = true;
            });
        }
    });
})