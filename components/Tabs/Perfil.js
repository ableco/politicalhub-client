import { questions, candidateAnswers } from "../../utils/questionsAndAnswers";

export default function Ficha({ candidate }) {
  const answers = candidateAnswers.find((item) => item.id === candidate.id);

  return (
    <div className="px-8 lg:px-52 py-10">
      <div className="border-neutral-200 border rounded">
        <h3 className="py-4 px-6 border-b border-neutral-200 font-bold text-xl">
          Preguntas y respuestas
        </h3>
        <div className="px-6 pt-4 pb-4">
          {questions.map((question, index) => {
            const answer = answers.answers[question.id];

            return (
              <div
                key={question.id}
                className={index !== 0 ? "max-w-160 mt-4" : "max-w-160"}
              >
                <p className="text-neutral-800 text-sm">
                  <span className="font-semibold">· {question.question}</span>
                  <br />
                  <span className="font-normal">
                    {question.answers[`value${answer}`]}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
