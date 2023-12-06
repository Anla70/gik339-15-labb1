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
  // Eventobjektet används för att få information om target och vi skriver ut infon till konsolen
  const target = e.target;
  console.log(`Input field ${target.name} triggered the event.`);

  // Om avsändaren/target är inputfältet content så ska div-elementet uppdateras
  if (target.name === "content") {
    divElement.innerHTML = target.value;
  }
}

// Här kopplar vi på eventlyssnare

// Eventlyssnare till checkboxen
checkbox.addEventListener("change", function () {
  // Hämtar färgen från textfältet
  const colorInput = document.getElementById("color");
  const color = colorInput.value;

  // Uppdaterar div-elementets bakgrundsfärg
  divElement.style.backgroundColor = color;
});

// Eventlyssnare till textfälten
textfields.forEach(function (textfield) {
  // Kopplar eventlyssnare till input och blur för våra textfält
  textfield.addEventListener("input", handleInputEvent);
  textfield.addEventListener("blur", handleInputEvent);
});

// Eventlyssnare till knappen
button.addEventListener("click", function () {
  // Tar bort div-elementet
  divElement.remove();
});
