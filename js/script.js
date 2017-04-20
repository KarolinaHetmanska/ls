$(document).ready(function ()
{
  console.log('gotowy');
  $('#save-values').click(function () {
    localStorage.setItem("fruit",$('#favourite-fruit').val())
    localStorage.name = $('#given-name').val()
    console.log(localStorage.fruit);
    console.log(localStorage.name);
  })

  $(document).ready(function () {
    $('#output-name').text("Cześć " + localStorage.getItem("name"))

    switch (localStorage.fruit) {
      case "maliny":
      $('#fruit-description').text("To super, bo " + localStorage.getItem("fruit") + " są bardzo dobre");
      break;

      case "jabłka":
      $('#fruit-description').text("To super, bo " + localStorage.getItem("fruit") + " są zdrowe");
      break;

      case "banany":
      $('#fruit-description').text("To dobrze, bo " + localStorage.getItem("fruit") + " są smaczne i pożywne");
      break;

      case "truskawki":
      $('#fruit-description').text("To dobrze, bo " + localStorage.getItem("fruit") + " są pyszne");
      break;
    }

      for (var i = 1; i < 41; i+= 1 ) {
        var randomValue = Math.random();
        $('#fruit-items').append('<span style="top: ' + randomValue*10 +'rem; left: ' + randomValue*100 + 'rem" id="output' + i + '" class="fruit ' + localStorage.fruit +'"></span>');
      }
  })
  })
// function saveData ()
// {
// localStorage.color = document.getElementById('favourite-color').value
// localStorage.name = document.getElementById('name').value
//
// }

// function showData()
// {
//   document.getElementById('output').innerHTML = localStorage.color
//   document.getElementById('output').innerHTML += " " + localStorage.name
// }
