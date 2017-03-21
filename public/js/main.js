var daysArr = [];

hotels.forEach(function(data){
  $( "#hotel-choices" ).append( "<option>" + data.name + "</option>" );
});

restaurants.forEach(function(data){
  $( "#restaurant-choices" ).append( "<option>" + data.name + "</option>" );
});

activities.forEach(function(data){
  $( "#activity-choices" ).append( "<option>" + data.name + "</option>" );
});

function latLong(type, selected, arr) {
  var loc;

  arr.forEach(function(vari) {
      if (vari.name === selected) {
        loc = vari.place.location;
      }
    })
    mapModule.drawMarker(type, loc, selected)
    var location = new google.maps.LatLng(loc[0], loc[1]);
    mapModule.currentMap.panTo(location)

    daysArr[1] = $('#itinerary').clone();
}



$('#options-panel').on('click', 'button', function(){
  var selected = $(this).prev().children(':selected').html();
  var type = $(this).prev().data().type.toString();

  var loc;
  if (type === 'hotel'){
    $( "#hotel-itin" ).append( "<span class='title'>" + selected + "</span>" + "<button class='btn btn-xs btn-danger remove btn-circle'>x</button>");
    latLong(type, selected, hotels);
 }

  if (type === 'restaurant'){
    $( "#restaurant-itin" ).append( "<span class='title'>" + selected + "</span>" + "<button class='btn btn-xs btn-danger remove btn-circle'>x</button>");
    latLong(type, selected, restaurants);
}

  if (type === 'activity'){
    $( "#activity-itin" ).append( "<span class='title'>" + selected + "</span>" + "<button class='btn btn-xs btn-danger remove btn-circle'>x</button>");
    latLong(type, selected, activities);
  }
});

//remove button functionality
$('.itin-body').on('click', 'button', function() {
  var toDelete = $(this).prev().text()

  $(this).prev().remove()
  $(this).remove()

  mapModule.markers.forEach(function(marker) {
    if (marker.title === toDelete) {
      marker.setMap(null)

    }
  })

  daysArr[1] = $('#itinerary').clone();
})

  var i = 1;
//adding days
$('#day-add').on('click', function() {
  i++
  console.log($(this).parent())
  // $(this).parent().append('<button class="btn btn-circle day-btn">' + i + "</button>")
  $(this).prev().after('<button class="btn btn-circle day-btn">' + i + "</button>")
  daysArr[1] = $('#itinerary').clone();
})




daysArr.push($('#itinerary').clone());
daysArr.push($('#itinerary').clone());


// $('#app')
