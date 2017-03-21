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
  // $().append( "<option>" + data.name + "</option>" );
  // <span class="title">Andaz Wall Street</span>
  if (type === 'hotel'){
    $( "#itinerary ul" ).children()[0].append( "<span class='title'>" + selected + "</span>" + "<button class='btn btn-xs btn-danger remove btn-circle'>x</button>");
  }

  if (type === 'restaurant'){
    alert("hotel!!!!")
  }

  if (type === 'activity'){
    alert("activi!!!!")
  }
});
