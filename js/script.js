$(document).ready(function ()
{
  $('#save-values').click(function () {
    localStorage.setItem("fruit",$('#favourite-fruit').val())
    localStorage.name = $('#given-name').val()
  })

  $(document).ready(function () {
    $('#output-name').text("Cześć " + localStorage.getItem("name"))

    switch (localStorage.fruit) {
      case "maliny":
      $('#fruit-description').text("To super, że lubisz " + localStorage.getItem("fruit") + " bo są bardzo dobre");
      break;

      case "jabłka":
      $('#fruit-description').text("To super, że lubisz " + localStorage.getItem("fruit") + " bo są zdrowe");
      break;

      case "banany":
      $('#fruit-description').text("To super, że lubisz " + localStorage.getItem("fruit") + " bo są smaczne i pożywne");
      break;

      case "truskawki":
      $('#fruit-description').text("To super, że lubisz " + localStorage.getItem("fruit") + " bo są pyszne");
      break;
    }

      for (var i = 1; i < 41; i+= 1 ) {
        var randomValue = Math.random();
        $('#fruit-items').append('<span style="left: ' + randomValue*100 + 'rem" id="output' + i + '" class="owoc ' + localStorage.fruit +'"></span>');
      }
  })
  })
