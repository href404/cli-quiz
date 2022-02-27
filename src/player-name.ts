import inquirer from "inquirer";

export async function askName() {
    const answers = await inquirer.prompt({
        name: "player_name",
        type: "input",
        message: "What is your name?",
        default() {
            return "Player";
        },
    });

    return answers.player_name as string;
}
