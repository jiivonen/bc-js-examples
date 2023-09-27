const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
    let total = 0;
    let male = 0;

    // Your task is to fill in the missing parts of the
    // displayCatInfo() function to store:

    // 1) The names of the three mother cats, separated by commas,
    // in the motherInfo variable.
    // 2) The total number of kittens, and how many are male and female,
    // in the kittenInfo variable.

    // Hint: The cat information comes as a string.
    // You will need JSON.parse(string) function!

    // Add your code here:

    // Counters for the kittens
    let numberOfKittens = 0;
    let maleKittens = 0;
    let femaleKittens = 0;

    // We need to parse the cat information from text (string) to an array
    const catInfo = JSON.parse(catString);

    // This is usable for debugging and checking the dataformat
    // console.log(catInfo);

    for (const cat of catInfo) {
      motherInfo += cat.name + ', ';
      numberOfKittens += cat.kittens.length;

      for (const kitten of cat.kittens) {
        if (kitten.gender === 'f') {
          femaleKittens++;
        }
        else if (kitten.gender === 'm') {
          maleKittens++;
        }
      }
    }

    kittenInfo = `The total number of kittens is ${numberOfKittens} (${femaleKittens} females and ${maleKittens} males).`;

    // Don't edit the code below here!

    para1.textContent = motherInfo;
    para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);