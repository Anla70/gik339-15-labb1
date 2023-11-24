document.addEventListener("DOMContentLoaded", function () {
  const checkBox = document.getElementById("divstyle");
  const textFields = document.getElementsByClassName("textfield");
  const button = document.getElementById("button");
  const output = document.getElementById("output");

  function handleInput() {
    // Hämtar värdet från content-fältet
    const contentValue = document.querySelector("#content").value;

    // Uppdaterar innehållet i output med värdet från content-fältet. Vi får sätta en egen händelsehanterare för fältet color när vi fixar den sen.
    output.innerHTML = contentValue;
  }
  // Lägger till en event listener för varje textfält så att funktionen som kollar efter input och körs varje gång ett tecken skrivs in i något textfält
  for (let i = 0; i < textFields.length; i++) {
    textFields[i].addEventListener("input", handleInput);
  }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const checkbox = document.getElementById('divstyle')
//     const textfield = document.querySelector('textfield');
//     const button = document.getElementsByClassName('button');
//     const output = document.querySelector('output');

//     function handleInput(e) {

//         const contentValue = textfield.value;
//         output.innerHTML = `${contentValue}`;
//     }

//     function handleInput2(e) {

//         const target = e.target;
//         console.log(`${target.value}`);
//         output.innerHTML = `${target.value}`;

//         if (target.name === 'content') {
//             output.innerHTML = `${target.value}`;
//         }
//     }

// });
