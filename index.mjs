import chalk from "chalk";
import validator from "validator";
const ans=validator.isEmail('bisenakhil@2.com');
console.log(ans? chalk.green("valid email"): chalk.red('Invalid Email'));
