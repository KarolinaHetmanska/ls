function saveData ()
{
localStorage.color = document.getElementById('favourite-color').value
}

function showData()
{
  document.getElementById('output').innerHTML = localStorage.color
}


$(document).ready(function()
{
  $('p').addClass('blue');
})
