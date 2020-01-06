var hours;
var minutes;

$('.input1').keyup(function(){
minutes = minicalc();
hours = $('#decimal').val();
$('#hours').val(Math.floor(hours)+" h");
$('#minutes').val(minutes+" Minutes");
})

function minicalc(){
  var num = $('#decimal').val();
  var num_minus_floor = (num - Math.floor(num));
  num_minus_floor = num_minus_floor*100;
  num_minus_floor = num_minus_floor.toFixed(0);
  var output = 0.6*num_minus_floor;
  output = output.toFixed(0);
  return output;
}
