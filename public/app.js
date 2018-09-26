$.getJSON("/articles", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#articles").append("<p class='article-title' data-id='" + data[i]._id + "'>" + data[i].title + "<br />"+ "<a class='btn btn-primary' target='blank' href='https://www.democracynow.org" + data[i].link + "'>" + "Visit Link" + "</a></p>");
    }
  });
  
  
  $(document).on("click", "p", function() {
    $("#notes").empty();
    var thisId = $(this).attr("data-id");
  
    $.ajax({
      method: "GET",
      url: "/articles/" + thisId
    })
      .then(function(data) {
        console.log(data);
        $("#notes").append("<h4>" + data.title + "</h4>");
        $("#notes").append("<input id='titleinput' name='title' placeholder='Title'>");
        $("#notes").append("<textarea id='bodyinput' name='body' placeholder='Comment'></textarea>");
        $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Comment</button>");
  
        if (data.note) {
          $("#titleinput").val(data.note.title);
          $("#bodyinput").val(data.note.body);
        }
      });
  });
  
  $(document).on("click", "#savenote", function() {
    var thisId = $(this).attr("data-id");
  
    $.ajax({
      method: "POST",
      url: "/articles/" + thisId,
      data: {
        title: $("#titleinput").val(),
        body: $("#bodyinput").val()
      }
    })
      .then(function(data) {
        console.log(data);
        $("#notes").empty();
      });
  
    $("#titleinput").val("");
    $("#bodyinput").val("");
  });
  