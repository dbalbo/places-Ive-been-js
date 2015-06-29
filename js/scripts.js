$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var locationName = $("input#location-name").val();
    var dateVisited = $("input#date-visited").val();
    var landmark = $("input#landmark").val();
    var notes = $("input#notes").val();

    var newLocation = { namePlace: locationName, date: dateVisited, landmark: landmark, notes: notes };

    $("ul#places").append("<li><span class='location'>" + newLocation.namePlace + "</span></li>");

    $(".location").click(function() {
      $("#show-location").show();

      $(".location-name").text(newLocation.namePlace);
      $(".date-visited").text(newLocation.date);
      $(".landmark").text(newLocation.landmark);
      $(".notes").text(newLocation.notes);
    });
  });
});
