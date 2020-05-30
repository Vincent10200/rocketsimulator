
let Hackbutton = 0;

function button()
{ 

    if (Hackbutton > 1) {
        alert('You hacked the website.')
        location.href = 'https://www.rocketsimulator.ga';
      } else {
        alert('Your not allowed to visit this website.')
      }


}

function secretFunction() {
    alert("Hacked");
    Hackbutton = 2;
}