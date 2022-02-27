import inquirer from "inquirer";
import { handleAnswer } from "../answer";

export async function question4() {
    const answer = "object";
    const answers = await inquirer.prompt({
        name: "question_4",
        type: "list",
        message: "Which of the following is NOT a primitive type?\n",
        choices: ["boolean", "number", "null", answer],
    });
    return handleAnswer(answers.question_4 === answer);
}
