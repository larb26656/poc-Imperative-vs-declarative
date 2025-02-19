import * as readline from "readline";
import { run as runDeclarative } from "./declarative/main";
import { run as runImpreative } from "./declarative/main";

// Create an interface for reading input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for input
rl.question(
  "Enter 1 for poc imperative style or 2 for poc decalrative style: ",
  (input) => {
    // Convert input to a number
    const choice = parseInt(input, 10);

    // Check the input and run the appropriate command
    if (choice === 1) {
      console.log("Running command for input 1...");
      // Replace the command below with whatever command you need to run for input 1
      commandFor1();
    } else if (choice === 2) {
      console.log("Running command for input 2...");
      // Replace the command below with whatever command you need to run for input 2
      commandFor2();
    } else {
      console.log("Invalid input");
    }

    // Close the readline interface
    rl.close();
  }
);

// Example functions for your commands
function commandFor1() {
  runImpreative();
}

function commandFor2() {
  runDeclarative();
}
