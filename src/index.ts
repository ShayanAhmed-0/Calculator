#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

export class claculator {
  Addition = (numb1: number, numb2: number): number => {
    return numb1 + numb2;
  };
  Subtraction = (numb1: number, numb2: number): number => {
    return numb1 - numb2;
  };
  Multiplication = (numb1: number, numb2: number): number => {
    return numb1 * numb2;
  };
  Division = (numb1: number, numb2: number): number => {
    return numb1 / numb2;
  };
  Modulus = (numb1: number, numb2: number): number => {
    return numb1 % numb2;
  };
  Power = (numb1: number, numb2: number): number => {
    return numb1 ** numb2;
  };
}


//welcome functionality 
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
let welcome=async()=> {
    const rainbowTitle = chalkAnimation.rainbow(
      '\nCalculator By Shayan \n'
    );
  
    await sleep();
    rainbowTitle.stop();
  }
await welcome();
//welcome ends


let concondition:boolean=true; //condition for do while loop

let conconditionQuestion = async () => {
  let condition = await inquirer.prompt([
    {
      name: "condition",
      type: "list",
      message: `${chalk.bgRed("You want to Continue?\n")}`,
      choices: ["Exit","continue"],
    },
  ]);
  if(condition.condition=="Exit"){
    concondition=false  //do while loop condition changes here
  }
};

do {
  let num1 = await inquirer.prompt([
    {
      name: "name1",
      type: "number",
      message: `${chalk.greenBright("Enter First number")}:`,
    },
  ]);

  let num2 = await inquirer.prompt([
    {
      name: "name2",
      type: "number",
      message: `${chalk.greenBright("Enter Second number")}:`,
    },
  ]);

  console.log("\n")

  let operation = await inquirer.prompt([
    {
      name: "name",
      type: "list",
      message: `${chalk.magentaBright("operation you want to perform?")}:`,
      choices: ["Addition(+)", "Subtraction(-)", "Multiplication(*)", "Division(/)","Modulus(%)","Power(^)"],
    },
  ]);

  let result: number;
  let calc = new claculator();

  switch (operation.name) {
    case "Addition(+)":
      result = calc.Addition(num1.name1, num2.name2);
      console.log(`${chalk.blue("\nresult")} ${chalk.cyanBright(num1.name1)} + ${chalk.cyanBright(num2.name2)} = ${chalk.cyanBright(result)}\n`);
      break;
    case "Subtraction(-)":
      result = calc.Subtraction(num1.name1, num2.name2);
      console.log(`${chalk.blue("\nresult")} ${chalk.cyanBright(num1.name1)} - ${chalk.cyanBright(num2.name2)} = ${chalk.cyanBright(result)}\n`);
      break;
    case "Multiplication(*)":
      result = calc.Multiplication(num1.name1, num2.name2);
      console.log(`${chalk.blue("\nresult")} ${chalk.cyanBright(num1.name1)} * ${chalk.cyanBright(num2.name2)} = ${chalk.cyanBright(result)}\n`);
      break;
    case "Division(/)":
      result = calc.Division(num1.name1, num2.name2);
      console.log(`${chalk.blue("\nresult")} ${chalk.cyanBright(num1.name1)} / ${chalk.cyanBright(num2.name2)} = ${chalk.cyanBright(result)}\n`);
      break;

      case "Modulus(%)":
      result = calc.Modulus(num1.name1, num2.name2);
      console.log(`${chalk.blue("\nresult")} ${chalk.cyanBright(num1.name1)} % ${chalk.cyanBright(num2.name2)} = ${chalk.cyanBright(result)}\n`);
      break;

      case "Power(^)":
      result = calc.Power(num1.name1, num2.name2);
      console.log(`${chalk.blue("\nresult")} ${chalk.cyanBright(num1.name1)} ^ ${chalk.cyanBright(num2.name2)} = ${chalk.cyanBright(result)}\n`);
      break;
    default:
      console.log("Enter valid expression");
      break;
  }

await conconditionQuestion() //waiting for user to confirm continue or exit
console.clear()

} while (concondition== true);
