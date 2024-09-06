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
                1: [
                    "Treino 1 dia (Corpo inteiro):",
                    "Peito: Supino reto 3x12, Flexões 3x15",
                    "Tríceps: Tríceps banco 3x12",
                    "Costas: Puxada na polia 3x12",
                    "Bíceps: Rosca direta 3x12",
                    "Pernas: Agachamento 3x15",
                    "Abdômen: Abdominais 3x20",
                    "Ombros: Elevação lateral 3x12",
                    "Cardio: Corrida 15min"
                ],
                3: [
                    "Dia 1: Peito e Tríceps",
                    "Peito: Supino reto 3x12, Flexões 3x15",
                    "Tríceps: Tríceps banco 3x12",
                    "Dia 2: Costas e Bíceps",
                    "Costas: Puxada na polia 3x12, Remada curvada 3x12",
                    "Bíceps: Rosca direta 3x12",
                    "Dia 3: Pernas, Ombros e Abdômen",
                    "Pernas: Agachamento 3x15, Leg press 3x12",
                    "Ombros: Elevação lateral 3x12, Desenvolvimento militar 3x12",
                    "Abdômen: Abdominais 3x20",
                    "Cardio: Corrida 10min"
                ],
                5: [
                    "Dia 1: Peito",
                    "Peito: Supino reto 4x12, Supino inclinado 4x10",
                    "Dia 2: Costas",
                    "Costas: Remada curvada 4x12, Puxada na polia 4x10",
                    "Dia 3: Pernas",
                    "Pernas: Agachamento 4x15, Leg press 4x12",
                    "Dia 4: Ombros e Tríceps",
                    "Ombros: Desenvolvimento militar 4x10, Elevação lateral 4x12",
                    "Tríceps: Tríceps polia 4x12",
                    "Dia 5: Abdômen, Bíceps e Cardio",
                    "Abdômen: Abdominais 4x30",
                    "Bíceps: Rosca direta 4x10",
                    "Cardio: Corrida 20min"
                ]
            },
            intermediario: {
                1: [
                    "Treino 1 dia (Corpo inteiro):",
                    "Peito: Supino reto 4x10, Flexões 4x12",
                    "Tríceps: Tríceps polia 4x10",
                    "Costas: Remada curvada 4x10",
                    "Bíceps: Rosca direta 4x10",
                    "Pernas: Agachamento 4x12",
                    "Abdômen: Abdominais 4x25",
                    "Ombros: Desenvolvimento militar 4x10",
                    "Cardio: Corrida 20min"
                ],
                3: [
                    "Dia 1: Peito e Tríceps",
                    "Peito: Supino reto 4x10, Supino inclinado 4x10",
                    "Tríceps: Tríceps polia 4x10",
                    "Dia 2: Costas e Bíceps",
                    "Costas: Remada curvada 4x10, Puxada na polia 4x10",
                    "Bíceps: Rosca direta 4x10",
                    "Dia 3: Pernas, Ombros, Abdômen e Cardio",
                    "Pernas: Agachamento 4x12, Leg press 4x12",
                    "Ombros: Desenvolvimento militar 4x10, Elevação lateral 4x12",
                    "Abdômen: Abdominais 4x25",
                    "Cardio: Corrida 15min"
                ],
                5: [
                    "Dia 1: Peito",
                    "Peito: Supino reto 4x12, Supino inclinado 4x10",
                    "Dia 2: Costas",
                    "Costas: Remada curvada 4x10, Puxada na polia 4x10",
                    "Dia 3: Pernas",
                    "Pernas: Agachamento 4x12, Leg press 4x12",
                    "Dia 4: Ombros e Tríceps",
                    "Ombros: Desenvolvimento militar 4x10, Elevação lateral 4x12",
                    "Tríceps: Tríceps polia 4x10",
                    "Dia 5: Abdômen, Bíceps e Cardio",
                    "Abdômen: Abdominais 4x30",
                    "Bíceps: Rosca direta 4x10",
                    "Cardio: Corrida 25min"
                ]
            }
        },
    
        'condicionamento fisico geral': {
            iniciante: {
                1: [
                    "Treino 1 dia (Corpo inteiro):",
                    "Peito: Flexões 3x15",
                    "Pernas: Agachamento 3x15",
                    "Cardio: Corrida 15min, Pular Corda 10min"
                ],
                3: [
                    "Dia 1: Peito, Tríceps e Cardio",
                    "Peito: Supino 3x12, Flexões 3x15",
                    "Tríceps: Tríceps banco 3x12",
                    "Cardio: Corrida 15min",
                    "Dia 2: Pernas e Costas",
                    "Pernas: Agachamento 3x15, Leg press 3x12",
                    "Costas: Remada curvada 3x12",
                    "Dia 3: Ombros, Abdômen e Cardio",
                    "Ombros: Desenvolvimento militar 3x12",
                    "Abdômen: Abdominais 3x20",
                    "Cardio: Corrida 10min"
                ],
                5: [
                    "Dia 1: Peito",
                    "Peito: Supino reto 3x12, Flexões 3x15",
                    "Dia 2: Costas e Cardio",
                    "Costas: Remada curvada 3x12",
                    "Cardio: Corrida 20min",
                    "Dia 3: Pernas",
                    "Pernas: Agachamento 4x15, Leg press 3x12",
                    "Dia 4: Ombros e Tríceps",
                    "Ombros: Desenvolvimento militar 3x12",
                    "Tríceps: Tríceps banco 3x12",
                    "Dia 5: Abdômen e Cardio",
                    "Abdômen: Abdominais 4x25",
                    "Cardio: Corrida 15min"
                ]
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