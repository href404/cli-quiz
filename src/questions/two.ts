import inquirer from "inquirer";
import { handleAnswer } from "../answer";

export async function question2() {
    const answer = '"1111"';
    const answers = await inquirer.prompt({
        name: "question_2",
        type: "list",
        message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
        choices: ["4", '"4"', answer, "69420"],
    });
    return handleAnswer(answers.question_2 === answer);
}
