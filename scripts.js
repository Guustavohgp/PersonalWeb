function gerarRotinaTreino(params) {
    let planoGerado = [];

    // Planos de treino Funcional
    const treinoFuncional = {
        iniciante: {
            1: ["Dia 1: Corrida 10min, Flexões 3x10", "Pular Corda 5min, Abdominais 3x20", "Agachamentos 3x15", "Burpees 3x10", "Corrida 10min"],
            3: ["Dia 1: Corrida 10min, Pular Corda 5min", "Dia 2: Agachamentos 3x15, Flexões 3x10", "Dia 3: Abdominais 3x20, Burpees 3x10"],
            5: ["Dia 1: Corrida 10min, Flexões 3x10", "Dia 2: Pular Corda 5min, Abdominais 3x20", "Dia 3: Agachamentos 3x15", "Dia 4: Burpees 3x10", "Dia 5: Corrida 10min"]
        },
        intermediario: {
            1: ["Dia 1: Corrida 20min, Flexões 4x15", "Pular Corda 10min, Abdominais 4x25", "Agachamentos 4x20", "Burpees 4x15", "Corrida 20min"],
            3: ["Dia 1: Corrida 20min, Pular Corda 10min", "Dia 2: Agachamentos 4x20, Flexões 4x15", "Dia 3: Abdominais 4x25, Burpees 4x15"],
            5: ["Dia 1: Corrida 20min, Flexões 4x15", "Dia 2: Pular Corda 10min, Abdominais 4x25", "Dia 3: Agachamentos 4x20", "Dia 4: Burpees 4x15", "Dia 5: Corrida 20min"]
        },
        avancado: {
            1: ["Dia 1: Corrida 30min, Flexões 5x20", "Pular Corda 15min, Abdominais 5x30", "Agachamentos 5x20", "Burpees 5x20", "Corrida 30min"],
            3: ["Dia 1: Corrida 30min, Pular Corda 15min", "Dia 2: Agachamentos 5x20, Flexões 5x20", "Dia 3: Abdominais 5x30, Burpees 5x20"],
            5: ["Dia 1: Corrida 30min, Flexões 5x20", "Dia 2: Pular Corda 15min, Abdominais 5x30", "Dia 3: Agachamentos 5x20", "Dia 4: Burpees 5x20", "Dia 5: Corrida 30min"]
        }
    };

    // Planos de treino Cardio
    const treinoCardio = {
        iniciante: {
            1: ["Dia 1: Corrida 10min, Pular Corda 10min"],
            3: ["Dia 1: Corrida 10min", "Dia 2: Pular Corda 10min", "Dia 3: Corrida 10min"],
            5: ["Dia 1: Corrida 10min", "Dia 2: Pular Corda 10min", "Dia 3: Corrida 10min", "Dia 4: Pular Corda 10min", "Dia 5: Corrida 10min"]
        },
        intermediario: {
            1: ["Dia 1: Corrida 20min, Pular Corda 15min"],
            3: ["Dia 1: Corrida 20min", "Dia 2: Pular Corda 15min", "Dia 3: Corrida 20min"],
            5: ["Dia 1: Corrida 20min", "Dia 2: Pular Corda 15min", "Dia 3: Corrida 20min", "Dia 4: Pular Corda 15min", "Dia 5: Corrida 20min"]
        },
        avancado: {
            1: ["Dia 1: Corrida 30min, Pular Corda 20min"],
            3: ["Dia 1: Corrida 30min", "Dia 2: Pular Corda 20min", "Dia 3: Corrida 30min"],
            5: ["Dia 1: Corrida 30min", "Dia 2: Pular Corda 20min", "Dia 3: Corrida 30min", "Dia 4: Pular Corda 20min", "Dia 5: Corrida 30min"]
        }
    };

    // Planos de treino Peso Livre
    const treinoPesoLivre = {
        'ganho de massa muscular': {
            iniciante: {
                1: ["Treino corpo inteiro: Peito e Tríceps - Flexões 3x10, Supino com Halteres 3x12, Costas e Bíceps - Remada 3x12, Rosca Bíceps 3x12, Pernas - Agachamentos 4x15, Leg Press 3x12, Ombros - Elevação Lateral 3x12, Desenvolvimento com Halteres 3x12, Abdômen e Cardio - Abdominais 4x20, Corrida 15min" ],
                3: ["Dia 1: Peito e Tríceps - Flexões 3x10, Supino com Halteres 3x12", 
                    "Dia 2: Costas e Bíceps - Remada 3x12, Rosca Bíceps 3x12", 
                    "Dia 3: Pernas e Abdômen - Agachamentos 3x15, Abdominais 3x20"],
                5: ["Dia 1: Peito - e Tríceos - Flexões 3x10, Supino com Halteres 3x12", 
                    "Dia 2: Costas e Bíceps - Remada Curvada 3x12, Pulldown 3x12, Rosca Bíceps 3x12", 
                    "Dia 3: Pernas - Agachamentos 4x15, Leg Press 3x12", 
                    "Dia 4: Ombros - Elevação Lateral 3x12, Desenvolvimento com Halteres 3x12", 
                    "Dia 5: Abdômen e Cardio - Abdominais 4x20, Corrida 15min"]
            },
            intermediario: {
                1: ["Treino corpo inteiro: Peito e Tríceps - Flexões 4x12, Supino 4x10, Costas e Bíceps - Remada 4x10, Rosca Bíceps 4x10, Pernas - Agachamentos 4x20, Leg Press 4x12, Ombros - Elevação Lateral 4x12, Desenvolvimento com Halteres 4x10, Abdômen e Cardio - Abdominais 5x30, Corrida 20min"],
                3: ["Dia 1: Peito e Tríceps - Flexões 4x12, Supino 4x10", 
                    "Dia 2: Costas e Bíceps - Remada 4x10, Rosca Bíceps 4x10", 
                    "Dia 3: Pernas e Abdômen - Agachamentos 4x20, Abdominais 4x25"],
                5: ["Dia 1: Peito - Supino 4x10, Flexões 4x12", 
                    "Dia 2: Costas e Bíceps- Remada Curvada 4x12, Pulldown 4x10, Rosca Bíceps 4x10", 
                    "Dia 3: Pernas - Agachamento 4x15, Leg Press 4x12", 
                    "Dia 4: Ombros - Desenvolvimento com Halteres 4x10, Elevação Lateral 4x12", 
                    "Dia 5: Abdômen e Cardio - Abdominais 5x30, Corrida 20min"]
            },
            avancado: {
                1: ["Treino corpo inteiro: Peito e Tríceps - Flexões 5x15, Supino 5x8, Costas e Bíceps - Remada 5x8, Rosca Bíceps 5x10, Pernas - Agachamentos 5x15, Leg Press 5x12, Ombros - Elevação Lateral 5x12, Desenvolvimento com Halteres 5x10, Abdômen e Cardio - Abdominais 5x40, Corrida 30min"],
                3: ["Dia 1: Peito e Tríceps - Supino 5x8, Flexões 5x15", 
                    "Dia 2: Costas e Bíceps - Remada 5x8, Rosca Bíceps 5x10", 
                    "Dia 3: Pernas e Abdômen - Agachamento 5x15, Abdominais 5x30"],
                5: ["Dia 1: Peito - Supino 5x10, Flexões 5x15", 
                    "Dia 2: Costas e Bíceps - Remada 5x12, Pulldown 5x10, Rosca Bíceps 5x10 ", 
                    "Dia 3: Pernas - Agachamentos 5x15, Leg Press 5x12", 
                    "Dia 4: Ombros - Desenvolvimento com Halteres 5x10, Elevação Lateral 5x12", 
                    "Dia 5: Abdômen e Cardio - Abdominais 5x40, Corrida 30min"]
            }
        },
        'condicionamento fisico geral': {
            iniciante: {
                1: ["Treino corpo inteiro: Correr 10min, Pular Corda 5min, Agachamentos 3x15, Flexões 3x10, Abdominais 3x20."],
                3: ["Dia 1: Peito e Tríceps - Flexões 3x10, Supino com Halteres 3x12", 
                    "Dia 2: Costas e Bíceps - Remada Curvada 3x12, Rosca Bíceps 3x12", 
                    "Dia 3: Pernas e Abdômen - Agachamentos 3x15, Abdominais 3x20"],
                5: ["Dia 1: Peito - Flexões 3x10, Supino com Halteres 3x12", 
                    "Dia 2: Costas - Remada Curvada 3x12, Pulldown 3x12", 
                    "Dia 3: Pernas - Agachamentos 4x15, Leg Press 3x12", 
                    "Dia 4: Ombros - Elevação Lateral 3x12, Desenvolvimento com Halteres 3x12", 
                    "Dia 5: Abdômen e Cardio - Abdominais 4x20, Corrida 15min"]
            },
            intermediario: {
                1: ["Treino corpo inteiro: Corrida intensa 15min, Pular Corda 10min, Agachamentos 4x20, Flexões 4x15, Abdominais 4x25."],
                3: ["Dia 1: Peito e Tríceps - Flexões 4x12, Supino 4x10", 
                    "Dia 2: Costas e Bíceps - Remada Curvada 4x10, Rosca Bíceps 4x12", 
                    "Dia 3: Pernas e Abdômen - Agachamentos 4x20, Abdominais 4x25"],
                5: ["Dia 1: Peito - Supino 4x10, Flexões 4x12", 
                    "Dia 2: Costas - Remada Curvada 4x12, Pulldown 4x10", 
                    "Dia 3: Pernas - Agachamento 4x15, Leg Press 4x12", 
                    "Dia 4: Ombros - Desenvolvimento com Halteres 4x10, Elevação Lateral 4x12", 
                    "Dia 5: Abdômen e Cardio - Abdominais 5x30, Corrida 20min"]
            },
            avancado: {
                1: ["Treino corpo inteiro: Corrida forte 20min, Pular Corda 15min, Agachamentos 5x20, Flexões 5x20, Abdominais 5x30."],
                3: ["Dia 1: Peito e Tríceps - Supino 5x8, Flexões 5x15", 
                    "Dia 2: Costas e Bíceps - Remada Curvada 5x8, Rosca Direta 5x10", 
                    "Dia 3: Pernas e Abdômen - Agachamento 5x15, Abdominais 5x30"],
                5: ["Dia 1: Peito - Supino 5x10, Flexões 5x15", 
                    "Dia 2: Costas - Remada Curvada 5x12, Pulldown 5x10", 
                    "Dia 3: Pernas - Agachamentos 5x15, Leg Press 5x12", 
                    "Dia 4: Ombros - Desenvolvimento Militar 5x10, Elevação Lateral 5x12", 
                    "Dia 5: Abdômen e Cardio - Abdominais 5x40, Corrida 30min"]
            }
        }
    };

    // Adicionar log para ver os parâmetros recebidos
    console.log("Parâmetros recebidos:", params);

    // Normalizar as chaves para garantir a correspondência
    const objetivo = params.objetivo.toLowerCase();
    const nivel = params.nivel.toLowerCase();
    const dias = parseInt(params.dias);

    // Gerar rotina de treino com base nos parâmetros
    if (params.tipoTreino === 'Funcional') {
        planoGerado = treinoFuncional[nivel][dias] || ['Erro: Não foi possível encontrar um treino para esses parâmetros.'];
    } else if (params.tipoTreino === 'Cardio') {
        planoGerado = treinoCardio[nivel][dias] || ['Erro: Não foi possível encontrar um treino para esses parâmetros.'];
    } else if (params.tipoTreino === 'Peso Livre') {
        if (treinoPesoLivre[objetivo] && treinoPesoLivre[objetivo][nivel] && treinoPesoLivre[objetivo][nivel][dias]) {
            planoGerado = treinoPesoLivre[objetivo][nivel][dias];
        } else {
            planoGerado = ['Erro: Não foi possível encontrar um treino para esses parâmetros.'];
        }
    } else {
        planoGerado = ['Tipo de treino não reconhecido.'];
    }

    return planoGerado.join('<br>');
}