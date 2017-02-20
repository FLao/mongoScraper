
// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    // Display the apropos information on the page
    $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
  }
});

// When you click the scrape articles button
$(document).on("click", "#scrapearticles", function() {
  // Run a GET request to delete the note, using what's entered in the inputs
  $.ajax({
    method: "GET",
    url: "/scrape",
  })
    // With that done
    .done(function() {
      console.log("Scrape articles successful!")
    });
});

// When you click the delete note button
$(document).on("click", "#deletenote", function() {
  // Grab the id associated with the note from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to delete the note, using what's entered in the inputs
  $.ajax({
    method: "DELETE",
    url: "/notes/" + thisId,
  })
    // With that done
    .done(function() {
      console.log("Delete note successful!")
    });
});