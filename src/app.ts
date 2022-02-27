import { askName } from "./player-name";
import { questions } from "./questions";
import { welcome } from "./welcome";
import { winner } from "./winner";

await welcome();
export const playerName = await askName();
for (const askQuestion of questions) await askQuestion();
winner();
