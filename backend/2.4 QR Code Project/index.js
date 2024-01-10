/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Please, input url that you want to convert to qr code: ",
    },
  ])
  .then((answers) => {
    fs.writeFile("url.txt", answers.url, "utf8", (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
    createQrCode(answers.url);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
      console.log("Something went wrong");
      console.log(error);
    }
  });

function createQrCode(url) {
  const qrImage = qr.image(url);
  qrImage.pipe(fs.createWriteStream("url.png"));
}
