import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import { playerName } from "./app";

export function winner() {
    console.clear();
    const txt = `Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`;
    figlet(txt, (_, result) => onResult(result));
}

function onResult(data?: string) {
    console.log(gradient.pastel.multiline(data) + "\n");

    const message =
        "Programming isn't about what you know; it's about making the command line look cool";

    console.log(chalk.green(message));
    process.exit(0);
}
