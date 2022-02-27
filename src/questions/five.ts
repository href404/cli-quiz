import inquirer from "inquirer";
import { handleAnswer } from "../answer";

export async function question5() {
    const answer = "non-blocking";
    const answers = await inquirer.prompt({
        name: "question_5",
        type: "list",
        message:
            "JS is a high-level single-threaded, garbage-collected,\n" +
            "interpreted(or just-in-time compiled), prototype-based,\n" +
            "multi-paradigm, dynamic language with a ____ event loop\n",
        choices: ["multi-threaded", answer, "synchronous", "promise-based"],
    });

    return handleAnswer(answers.question_5 === answer);
}
