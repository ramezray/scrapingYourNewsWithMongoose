$.getJSON("/articles", function (data) {
    for (var i = 0; i < data.length; i++) {
        $("#articles").prepend("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + "<a target=_blank href=" + data[i].link + ">" + data[i].link + "</a>" + "</p>");
    }
});
$(document).on("click", "p", function () {
    $("#notes").empty();
    var thisId = $(this).attr("data-id");
    $.ajax({
            method: "GET",
            url: "/articles/" + thisId
        })
        .then(function (data) {
            $("#notes").append("<h2>" + data.title + "</h2>");
            $("#notes").append("<input id='titleinput'  name='title' >");
            $("#notes").append("<textarea  id='bodyinput' name='body'></textarea>");
            $("#notes").append("<button class=btn-primary data-id='" + data._id + "' id='savenote'>Save Note</button>");
            if (data.note) {
                $("#titleinput").val(data.note.title);
                $("#bodyinput").val(data.note.body);
            }
        });
});
$(document).on("click", "#savenote", function () {
    var thisId = $(this).attr("data-id");
    $.ajax({
            method: "POST",
            url: "/articles/" + thisId,
            data: {
                title: $("#titleinput").val(),
                body: $("#bodyinput").val()
            }
        })
        .then(function (data) {
            $("#notes").empty();
        });
});