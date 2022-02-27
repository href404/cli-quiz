import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { sleep } from "./utils/sleep";

export async function welcome() {
    console.clear();
    const rainbowTitle = chalkAnimation.rainbow(
        "Who Wants To Be A JavaScript Millionaire? \n"
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgBlue("HOW TO PLAY")} 
        I am a process on your computer.
        If you get any question wrong I will be ${chalk.bgRed("killed")}
        So get all the questions right...
  `);
}
