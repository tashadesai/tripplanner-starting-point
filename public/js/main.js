var num = "1";

var daysObj = {};

$('.day-buttons').on('click', 'button', function(){
  num = $(this).text();
  if (num !== '+'){
    if(!daysObj[num]){
      $( "#hotel-itin span" ).remove();
      $( "#hotel-itin button" ).remove();
      $( "#restaurant-itin span" ).remove();
      $( "#restaurant-itin button" ).remove();
      $( "#activity-itin span" ).remove();
      $( "#activity-itin button" ).remove();
      daysObj[num] = $('#itinerary').clone(true, true);
    } else {
      $('#itinerary').remove();
      $('#removeSection').append(daysObj[num]);
    }

    $('#day-num').text("Day " + num)
  }
});

$('#day-title').on('click', 'button', function() {
  // num = $(this).prev().text().slice(-1);
  // console.log(num)

  // daysObj[num] = null;
  for(var key in daysObj) {
    if (Number(key) > Number(num)) {
      console.log(key)
      var current = daysObj[key];
      daysObj[(Number(key) - 1).toString()] = current;
      // daysObj[key] = null;
      delete daysObj[key];
    }
  }

  // $(this).prev().remove();
  // $(this).remove();
  $('#day-add').prev().remove();
  $('#itinerary').remove();
  $('#removeSection').append(daysObj[num]);
})
//remove day from obj
//move all keys down one
//remove circle number
//switch itin to day before
//move all circle buttons down one
//move day-num title down one


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

    daysObj[num] = $('#itinerary').clone(true, true);
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
  console.log(this);
  var toDelete = $(this).prev().text();

  $(this).prev().remove();
  $(this).remove();

  mapModule.markers.forEach(function(marker) {
    if (marker.title === toDelete) {
      marker.setMap(null);

    }
  });

  daysObj[num] = $('#itinerary').clone(true, true);
});

  var i = 1;
//adding days
$('#day-add').on('click', function() {
  i = Number($(this).prev().text()) + 1
  console.log(num)
  // $(this).parent().append('<button class="btn btn-circle day-btn">' + i + "</button>")
  $(this).prev().after('<button class="btn btn-circle day-btn">' + i + "</button>");
  daysObj[num] = $('#itinerary').clone(true, true);
});
