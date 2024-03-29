// Om vi bare vil la brukeren trykke én gang:
let kanTrykke = true

// Vinnertallet vårt:
const vinnerTall = Math.floor(Math.random() * 3)
console.log("Vinnertallet er " + vinnerTall)

// Endrer bilde fra geit til bil:
const prizeBilder = document.querySelectorAll(".prize")
const prizeBilde = prizeBilder[vinnerTall]
prizeBilde.src = "media/ferrari.png"
prizeBilde.style.width = "80%"

/* Finn alle våre dører og add event listener til dem */
const doors = document.querySelectorAll(".openclose")
for (let i = 0; i < doors.length; i++) {
  const door = doors[i]
  door.addEventListener("click", klikkdor)
}
/* Den "raske" måten å gjøre det på: 
  document.querySelectorAll('.openclose').forEach(item => {
    item.addEventListener('click', klikkdor)
  })  */

function klikkdor(event) {
  if (kanTrykke) {
    // Finner døren som ble trykket ved hjelp av "event.target":
    const door = event.target

    // Ikke la brukeren åpne flere dører:
    kanTrykke = false

    // Hvilken dør er dette?
    // Bruker "data-index" property (som ligger på "parent elementet"):
    const door_index = door.parentElement.dataset.index
    console.log("Dør nummer", door_index, "VinnerTall", vinnerTall)
    let lydfil = "goat"
    if (door_index == vinnerTall) {
      lydfil = "success"
      document.getElementById("outputText").innerHTML = "DU VANT! DU VANT!"
      document.body.style.backgroundColor = "green"
    }

    // Åpne døra "litt"
    door.src = "media/semiclosed.png"
    // Åpne døra helt etter et lite sekund:
    setTimeout(opendoor, 800, door)

    // Spill lyden med en gang
    const audio = new Audio("media/" + lydfil + ".mp3")
    audio.play()
  }
}

function opendoor(door) {
  // Åpne døra helt
  door.src = "media/open.png"
}
