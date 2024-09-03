function gerarPlano() {
    const biotipo = document.getElementById('biotipo').value;
    const dias = document.getElementById('dias').value;
    const tipo = Array.from(document.getElementById('tipo').selectedOptions).map(option => option.value);
    const objetivo = document.getElementById('objetivo').value;
    const nivel = document.getElementById('nivel').value;
    const equipamento = document.getElementById('equipamento').value;
    const tempo = document.getElementById('tempo').value;

    let plano = '';

    // Regra 1: Identificação do Biotipo
    plano += `<h2>Biotipo Corporal: ${biotipo}</h2>`;
    // Adicionar detalhes específicos do biotipo, se necessário

    // Regra 2: Periodização
    plano += `<h3>Periodização:</h3>`;
    if (dias == '1') {
        plano += 'Treino Full Body (Treino completo de todos os grupos musculares em uma única sessão).<br>';
    } else if (dias == '3') {
        plano += 'Treino ABC (Divisão dos grupos musculares em três sessões diferentes).<br>';
    } else if (dias == '5') {
        plano += 'Treino ABCDE (Divisão avançada, com um grupo muscular ou função trabalhada por dia).<br>';
    }

    // Regra 3: Tipo de Treino
    plano += `<h3>Tipo de Treino:</h3>`;
    plano += tipo.length ? tipo.join(', ') : 'Nenhum tipo de treino selecionado.<br>';

    // Regra 4: Objetivo
    plano += `<h3>Objetivo:</h3>`;
    plano += objetivo ? objetivo : 'Nenhum objetivo selecionado.<br>';

    // Regra 5: Nível de Experiência
    plano += `<h3>Nível de Experiência:</h3>`;
    plano += nivel ? nivel : 'Nível de experiência não selecionado.<br>';

    // Regra 6: Equipamento Disponível
    plano += `<h3>Equipamento Disponível:</h3>`;
    plano += equipamento ? equipamento : 'Equipamento não especificado.<br>';

    // Regra 7: Tempo por Sessão
    plano += `<h3>Tempo por Sessão:</h3>`;
    plano += tempo ? `${tempo} minutos` : 'Tempo por sessão não especificado.<br>';

    document.getElementById('resultado').innerHTML = plano;
}