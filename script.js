const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Oque você acha que vai mudar com o avanço da tecnologia?",
        alternativas: [
            {
                texto: "Com o avanço da IA, podemos esperar mais automação de trabalhos, melhorias na medicina e transporte, educação mais personalizada, questões éticas e de segurança aumentadas, e mudanças econômicas significativas.",
                afirmação: "Tem esperança de que irá melhorar a segurança, entre outras coisas, sem prejudicar as profissões humanas."
            },
            {
                texto: "Com o avanço da IA, há preocupações sobre a substituição de empregos por automação, questões éticas relacionadas ao uso de dados pessoais, potenciais impactos negativos na privacidade e segurança cibernética,além de desafios em regulamentar o uso responsável da tecnologia.",
                afirmação: "Acha que ira ser extremamente prejudicial para a cybersegurança, além de afetar drasticamente as profissões humanas."
            }
        ]
    },
    {
        enunciado: "Até que ponto a IA deve tomar decisões?",
        alternativas: [
            {
                texto: "Restrição estrita: Implementar regulamentações rigorosas que exigem supervisão humana constante em todas as decisões críticas tomadas por sistemas de IA. Isso pode garantir que decisões importantes, como diagnósticos médicos ou operações financeiras, sejam sempre validadas e influenciadas por uma compreensão humana contextual.",
                afirmação: "Acha que as decisões devem ser restritas, com supervisão de algum responsavel para não ter nenhum problema."
            },
            {
                texto: "Flexibilidade controlada: Desenvolver sistemas de IA com capacidades autônomas, mas com mecanismos de transparência e explicabilidade embutidos. Isso permitiria que a IA tomasse decisões rápidas e precisas em situações onde a velocidade é crucial, como no gerenciamento de tráfego aéreo ou na resposta a desastres naturais, enquanto humanos mantêm a capacidade de revisar e corrigir decisões quando necessário.",
                afirmação: "Acha que devem fazer uma IA com certas limitações, para assim poder ter deciões autonomas, em situações onde a velocidade de reação é crucial."
            }
        ]
    },
    {
        enunciado: "O que você acha sobre a IA ser usada na area da saúde?",
        alternativas: [
            {
                texto: "Avanços na precisão diagnóstica: A IA na área da saúde pode melhorar significativamente a precisão dos diagnósticos médicos, ajudando os médicos a identificar condições com maior precisão e rapidez",
                afirmação: "Acredita que melhoraria a area da saúde com mais precisão em diagnósticos médicos.",
            },
            {
                texto: "Risco de privacidade dos dados: A utilização de IA na saúde pode aumentar preocupações com a privacidade dos dados dos pacientes, expondo informações sensíveis a potenciais violações de segurança e uso indevido.",
                afirmação: "É contra, pensa que as inforções pessoais dos pacientes ficariam vulnerávies, assim podendo expor informações sensíveis."
            }
        ]
    },
    {
        enunciado: "Oque pensa sobre usar a IA para fazer trabalhos acadêmicos?",
        alternativas: [
            {
                texto: "Melhoria na eficiência e qualidade: O uso da IA para realizar trabalhos acadêmicos pode aumentar a eficiência dos estudantes ao ajudá-los a organizar informações e encontrar fontes relevantes, resultando em trabalhos acadêmicos de maior qualidade.",
                afirmação: "Acha melhor, pois facilitaria o tempo, ajudaria os estudantes a ter"
            }
        ]
    }
]