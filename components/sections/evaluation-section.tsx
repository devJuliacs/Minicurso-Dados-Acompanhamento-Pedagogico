"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, CircleAlert, ClipboardCheck, RotateCcw } from "lucide-react"
import { Section } from "@/components/section"

const questions = [
  {
    prompt: "Quais são os principais dados de acompanhamento na EAD?",
    options: [
      "Apenas a nota final obtida nas avaliações presenciais e a taxa de pagamento das mensalidades.",
      "Logs de acesso e frequência, engajamento nos fóruns, taxa de entrega de atividades no prazo e notas de avaliação.",
      "Tempo total de navegação em sites externos, idade dos estudantes e modelo do computador utilizado.",
      "Número de arquivos baixados na biblioteca física e quantidade de e-mails pessoais enviados entre os alunos.",
    ],
    correct: 1,
  },
  {
    prompt: "Quais os objetivos de utilizar esses dados?",
    options: [
      "Automatizar a reprovação imediata dos estudantes sem necessidade de mediação docente.",
      "Substituir completamente os professores e tutores por algoritmos de atendimento automatizado.",
      "Identificar precocemente o risco de evasão, apoiar tomadas de decisão pedagógicas e personalizar o acompanhamento.",
      "Gerar relatórios exclusivamente punitivos para notificar órgãos reguladores sobre os alunos faltosos.",
    ],
    correct: 2,
  },
  {
    prompt: "O que podemos analisar sobre a interseção entre muitos acessos ao AVA e pouco rendimento?",
    options: [
      "Que o aluno possui domínio completo sobre o conteúdo e prefere passar mais tempo praticando no sistema.",
      "Que o aluno pode estar enfrentando dificuldades com o layout da plataforma, material confuso ou falta de organização nos estudos.",
      "Que o volume de cliques é a prova definitiva de que o aprendizado efetivo está ocorrendo com sucesso.",
      "Que o aluno está tentando burlar o sistema de chamadas automáticas da instituição.",
    ],
    correct: 1,
  },
  {
    prompt: "Como o Google Sheets auxilia na visualização de dados?",
    options: [
      "Organizando dados em tabelas dinâmicas, criando gráficos interativos e aplicando formatação condicional para alertas visuais.",
      "Gravando tutoriais em vídeo de forma automática a partir do histórico de navegação dos alunos.",
      "Substituindo o Ambiente Virtual de Aprendizagem (AVA) como plataforma principal de fóruns e envio de tarefas.",
      "Detectando automaticamente plágios em trabalhos de texto enviados pelos estudantes.",
    ],
    correct: 0,
  },
  {
    prompt: "Como criar um gráfico dinâmico utilizando o Google Sheets?",
    options: [
      "Digitando as médias individualmente na aba de comentários e solicitando a exportação em PDF.",
      "Baixando uma imagem genérica da internet e colando-a no centro da planilha de notas.",
      "Selecionando a base de dados, gerando uma Tabela Dinâmica via menu ‘Inserir’ e vinculando o gráfico a essa tabela resumida.",
      "Programando um script externo na linguagem C++ para manipular os arquivos brutos do navegador.",
    ],
    correct: 2,
  },
]

const optionLetters = ["A", "B", "C", "D"]

export function EvaluationSection() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [finished, setFinished] = useState(false)

  const question = questions[questionIndex]
  const isCorrect = answered && selectedOption === question.correct

  function submitAnswer() {
    if (selectedOption === null || answered) return
    if (selectedOption === question.correct) setScore((currentScore) => currentScore + 1)
    setAnswered(true)
  }

  function continueEvaluation() {
    if (questionIndex === questions.length - 1) {
      setFinished(true)
      return
    }

    setQuestionIndex((currentIndex) => currentIndex + 1)
    setSelectedOption(null)
    setAnswered(false)
  }

  function restartEvaluation() {
    setQuestionIndex(0)
    setSelectedOption(null)
    setScore(0)
    setAnswered(false)
    setFinished(false)
  }

  return (
    <Section
      id="avaliacao"
      step={3}
      eyebrow="Conclusão"
      title="Avaliação"
      description="Depois de assistir ao vídeo e praticar com o material, responda à avaliação para concluir o minicurso."
    >
      <div className="rounded-xl border border-border bg-card p-5 sm:p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
              <ClipboardCheck className="size-6 text-primary" aria-hidden="true" />
            </span>
            <div>
              <p className="font-bold text-foreground">Avaliação do minicurso</p>
              <p className="text-sm text-muted-foreground">Marque uma alternativa por questão.</p>
            </div>
          </div>
          {!finished && (
            <p className="text-sm font-semibold text-primary" aria-live="polite">
              {answered ? `Pontuação: ${score}/${questions.length}` : `Questão ${questionIndex + 1} de ${questions.length}`}
            </p>
          )}
        </div>

        {finished ? (
          <div className="py-2" role="status" aria-live="polite">
            <div className="mb-5 flex items-start gap-3">
              {score >= 3 ? (
                <CheckCircle2 className="mt-1 size-7 shrink-0 text-primary" aria-hidden="true" />
              ) : (
                <CircleAlert className="mt-1 size-7 shrink-0 text-destructive" aria-hidden="true" />
              )}
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {score >= 3
                    ? "Parabéns, você concluiu o curso!"
                    : "Você precisa acertar no mínimo 3/5 para concluir o curso."}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  Sua pontuação: {score}/{questions.length} questões corretas.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={restartEvaluation}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              <RotateCcw className="size-5" aria-hidden="true" />
              Fazer avaliação novamente
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 h-2 overflow-hidden rounded-full bg-muted" aria-label={`Progresso: questão ${questionIndex + 1} de ${questions.length}`}>
              <div
                className="h-full rounded-full bg-primary transition-[width]"
                style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>

            <fieldset>
              <legend className="mb-5 text-lg font-bold leading-snug text-foreground sm:text-xl">
                {question.prompt}
              </legend>
              <div className="grid gap-3" role="radiogroup" aria-label="Alternativas">
                {question.options.map((option, index) => {
                  const selected = selectedOption === index
                  const correctAnswer = answered && question.correct === index
                  const wrongAnswer = answered && selected && !isCorrect

                  return (
                    <button
                      key={option}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      disabled={answered}
                      onClick={() => setSelectedOption(index)}
                      className={`flex w-full items-start gap-3 rounded-lg border p-4 text-left text-sm leading-relaxed transition-colors sm:text-base ${
                        correctAnswer
                          ? "border-primary bg-secondary text-foreground"
                          : wrongAnswer
                            ? "border-destructive bg-destructive/5 text-foreground"
                            : selected
                              ? "border-primary bg-secondary/70 text-foreground"
                              : "border-border bg-background text-foreground hover:border-primary/60 hover:bg-muted"
                      } ${answered ? "cursor-default" : "cursor-pointer"}`}
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">
                        {optionLetters[index]}
                      </span>
                      <span>{option}</span>
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <div className="mt-5 min-h-7" role="status" aria-live="polite">
              {answered && (
                <p className={`font-semibold ${isCorrect ? "text-primary" : "text-destructive"}`}>
                  {isCorrect
                    ? "Resposta correta! Você pontuou nesta questão."
                    : `Você errou esta questão. A resposta correta é ${optionLetters[question.correct]}.`}
                </p>
              )}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
              {!answered ? (
                <button
                  type="button"
                  onClick={submitAnswer}
                  disabled={selectedOption === null}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  Confirmar resposta
                </button>
              ) : (
                <button
                  type="button"
                  onClick={continueEvaluation}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  {questionIndex === questions.length - 1 ? "Ver resultado" : "Próxima questão"}
                  <ArrowRight className="size-5" aria-hidden="true" />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </Section>
  )
}
