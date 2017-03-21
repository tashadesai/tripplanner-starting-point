hotels.forEach(function(data){
  $( "#hotel-choices" ).append( "<option>" + data.name + "</option>" );
});

restaurants.forEach(function(data){
  $( "#restaurant-choices" ).append( "<option>" + data.name + "</option>" );
});

activities.forEach(function(data){
  $( "#activity-choices" ).append( "<option>" + data.name + "</option>" );
});

$('.panel-body').on('click', 'button', function(){
  var selected = $(this).prev().children(':selected').html();
  var type = $(this).prev().data().type.toString();

  if (type === 'hotel'){
    $( "#hotel-itin" ).append( "<span class='title'>" + selected + "</span>" + "<button class='btn btn-xs btn-danger remove btn-circle'>x</button>");
  }

  if (type === 'restaurant'){
    alert("restaurant!!!!");
  }

  if (type === 'activity'){
    alert("activity!!!!");
  }
});
