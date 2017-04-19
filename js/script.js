$(document).ready(function ()
{
  console.log('gotowy');
  $('#save-values').click(function () {
    localStorage.setItem("fruit1",$('#orange').val())
    localStorage.name = $('#name').val()
    console.log(localStorage.color);
    console.log(localStorage.name);
  })

  $('#show-values').click(function () {
    $('#output').text(localStorage.color + " " + localStorage.getItem("name"))
    // $('#output').text + = localStorage.value
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
