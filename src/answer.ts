import { createSpinner } from "nanospinner";
import { playerName } from "./app";
import { sleep } from "./utils/sleep";

export async function handleAnswer(isCorrect: boolean) {
    const spinner = createSpinner("Checking answer...").start();
    await sleep();

    if (isCorrect) {
        spinner.success({
            text: `Nice work ${playerName}. That's a legit answer`,
        });
    } else {
        spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
        process.exit(1);
    }
}
