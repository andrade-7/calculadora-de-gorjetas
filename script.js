document.addEventListener('DOMContentLoaded', () => {
    const calculadora = () => {
        const valor_da_conta = parseFloat(document.getElementById('valor_da_conta').value);
        const qualidade_do_servico = parseFloat(document.getElementById('qualidade_do_servico').value);

        if (isNaN(valor_da_conta) || valor_da_conta <= 0) {
            alert('Por favor, insira um valor válido para a conta.');
            return;
        }

        const valor_da_gorgjeta = valor_da_conta * qualidade_do_servico;
        const total = valor_da_conta + valor_da_gorgjeta;

        document.getElementById('result').textContent = `Gorjeta: R$${valor_da_gorgjeta.toFixed(2)} | Total a Pagar: R$${total.toFixed(2)}`;
    };

    document.getElementById('calculadora').addEventListener('click', calculadora);
});
