import inquirer from "inquirer";
import { handleAnswer } from "../answer";

export async function question1() {
    const answer = "Dec 4th, 1995";
    const answers = await inquirer.prompt({
        name: "question_1",
        type: "list",
        message: "JavaScript was created in 10 days then released on\n",
        choices: ["May 23rd, 1995", "Nov 24th, 1995", answer, "Dec 17, 1996"],
    });

    return handleAnswer(answers.question_1 === answer);
}
