function gerarPlano() {
    const biotipo = document.getElementById('biotipo').value;
    const dias = document.getElementById('dias').value;
    const objetivo = document.getElementById('objetivo').value;
    const nivel = document.getElementById('nivel').value;

    // Coleta os valores das checkboxes selecionadas
    const tipoTreino = [];
    if (document.getElementById('funcional').checked) {
        tipoTreino.push('Funcional');
    }
    if (document.getElementById('cardio').checked) {
        tipoTreino.push('Cardio');
    }
    if (document.getElementById('hiit').checked) {
        tipoTreino.push('HIIT');
    }
    if (document.getElementById('pesoLivre').checked) {
        tipoTreino.push('Peso Livre');
    }
    if (document.getElementById('maquinario').checked) {
        tipoTreino.push('Maquinário');
    }

    // Chama a função para gerar a rotina de treino
    const rotinaTreino = gerarRotinaTreino({
        tipoTreino: tipoTreino,
        nivel: nivel
    });

    // Exibe os resultados
    let plano = `<h2>Biotipo Corporal: ${biotipo}</h2>`;
    plano += `<h3>Periodização:</h3>`;
    plano += dias == '1' ? 'Treino Full Body<br>' : dias == '3' ? 'Treino ABC<br>' : 'Treino ABCDE<br>';
    plano += `<h3>Objetivo:</h3>${objetivo}<br>`;
    plano += `<h3>Nível de Experiência:</h3>${nivel}<br>`;
    plano += `<h3>Rotina de Treino:</h3>${rotinaTreino}`;

    document.getElementById('resultado').innerHTML = plano;
}

function gerarRotinaTreino(params) {
    let rotina = '';
    
    const exercicios = {
        Funcional: {
            Iniciante: [
                "Agachamento com peso corporal - 3 séries de 12 repetições",
                "Flexão de braço com joelhos no chão - 3 séries de 10 repetições",
                "Burpees - 2 séries de 8 repetições"
            ],
            Intermediário: [
                "Agachamento com halteres - 4 séries de 15 repetições",
                "Flexão de braço padrão - 3 séries de 12 repetições",
                "Burpees - 3 séries de 10 repetições"
            ],
            Avançado: [
                "Agachamento com salto - 4 séries de 15 repetições",
                "Flexão de braço em prancha - 4 séries de 15 repetições",
                "Burpees - 4 séries de 15 repetições"
            ]
        },
        Cardio: {
            Iniciante: [
                "Caminhada rápida - 20 minutos",
                "Pular corda - 5 minutos",
                "Corrida leve - 10 minutos"
            ],
            Intermediário: [
                "Corrida - 20 minutos",
                "Ciclismo - 15 minutos",
                "HIIT - 10 minutos (30s ON/30s OFF)"
            ],
            Avançado: [
                "Sprint - 8 séries de 30 segundos (90s descanso)",
                "Ciclismo intenso - 20 minutos",
                "HIIT - 20 minutos (40s ON/20s OFF)"
            ]
        },
        'Peso Livre': {
            Iniciante: [
                "Supino com halteres - 3 séries de 12 repetições",
                "Remada com halteres - 3 séries de 12 repetições",
                "Elevação lateral com halteres - 3 séries de 15 repetições"
            ],
            Intermediário: [
                "Supino reto - 4 séries de 12 repetições",
                "Remada curvada - 4 séries de 12 repetições",
                "Elevação lateral - 4 séries de 15 repetições"
            ],
            Avançado: [
                "Supino inclinado - 4 séries de 10 repetições",
                "Remada com barra - 4 séries de 10 repetições",
                "Elevação lateral com halteres - 4 séries de 12 repetições"
            ]
        },
        HIIT: {
            Iniciante: [
                "Burpees - 20 segundos de esforço, 40 segundos de descanso (4 rodadas)",
                "Pular corda - 20 segundos de esforço, 40 segundos de descanso (4 rodadas)",
                "Mountain climbers - 20 segundos de esforço, 40 segundos de descanso (4 rodadas)"
            ],
            Intermediário: [
                "Burpees - 30 segundos de esforço, 30 segundos de descanso (5 rodadas)",
                "Pular corda - 30 segundos de esforço, 30 segundos de descanso (5 rodadas)",
                "Mountain climbers - 30 segundos de esforço, 30 segundos de descanso (5 rodadas)"
            ],
            Avançado: [
                "Burpees - 40 segundos de esforço, 20 segundos de descanso (6 rodadas)",
                "Pular corda - 40 segundos de esforço, 20 segundos de descanso (6 rodadas)",
                "Mountain climbers - 40 segundos de esforço, 20 segundos de descanso (6 rodadas)"
            ]
        }
    };
    
    const tipoTreino = params.tipoTreino;
    const nivel = params.nivel;

    // Verifica e adiciona o treino Funcional
    if (tipoTreino.includes('Funcional')) {
        rotina += `<h4>Funcional:</h4>`;
        rotina += exercicios.Funcional[nivel].join('<br>') + '<br>';
    }

    // Verifica e adiciona o treino de Peso Livre
    if (tipoTreino.includes('Peso Livre')) {
        rotina += `<h4>Peso Livre:</h4>`;
        rotina += exercicios['Peso Livre'][nivel].join('<br>') + '<br>';
    }

    // Verifica e adiciona o treino HIIT
    if (tipoTreino.includes('HIIT')) {
        rotina += `<h4>HIIT:</h4>`;
        rotina += exercicios.HIIT[nivel].join('<br>') + '<br>';
    }

    // Verifica e adiciona o treino Cardio
    if (tipoTreino.includes('Cardio')) {
        rotina += `<h4>Cardio:</h4>`;
        rotina += exercicios.Cardio[nivel].join('<br>') + '<br>';
    }

    return rotina;
}