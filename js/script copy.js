// Checkboxen hämtas
const checkbox = document.querySelector('input[type="checkbox"]');

// Alla textfält hämtas
const textfields = document.querySelectorAll(".textfield");

// Knappen hämtas
const button = document.getElementsByTagName("button")[0];

// Div-elementet hämtas
const divElement = document.getElementById("empty_box");

// Här skapas en fördefinierad funktion
function handleInputEvent(e) {
  const target = e.target;
  console.log(`Input field ${target.name} triggered the event.`);

  // Om avsändaren (target) är inputfältet content så ska div-elementet uppdateras
  if (target.name === "content") {
    divElement.innerHTML = target.value;
  }
}

// Här kopplar vi på eventlyssnare

// Eventlyssnare till checkboxen
checkbox.addEventListener("change", function () {
  const colorInput = document.getElementById("color");
  const color = colorInput.value;
  divElement.style.backgroundColor = color;
});

// Eventlyssnare till textfälten
textfields.forEach(function (textfield) {
  textfield.addEventListener("input", handleInputEvent);
  textfield.addEventListener("blur", handleInputEvent);
});

// Eventlyssnare till knappen
button.addEventListener("click", function () {
  divElement.remove();
});
