import inquirer from "inquirer";
import { handleAnswer } from "../answer";

export async function question3() {
    const answer = "undefined";
    const answers = await inquirer.prompt({
        name: "question_3",
        type: "list",
        message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
        choices: ["0", "🐏", "🐍", answer],
    });

    return handleAnswer(answers.question_3 === answer);
}
