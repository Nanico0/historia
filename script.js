const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Oque você acha que vai mudar com o avanço da tecnologia?"
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
        enunciado: "Até que ponto a IA deve tomar decisões?"
        alternativas: [
            {
                texto: "Restrição estrita: Implementar regulamentações rigorosas que exigem supervisão humana constante em todas as decisões críticas tomadas por sistemas de IA. Isso pode garantir que decisões importantes, como diagnósticos médicos ou operações financeiras, sejam sempre validadas e influenciadas por uma compreensão humana contextual.",
                afirmação: "Acha que as decisões devem ser restritas, com supervisão de algum responsavel para não ter nenhum problema."
            }
        ]
    }
]