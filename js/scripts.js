$(document).ready(function() {
  $("form#apt").submit(function(event) {
    var name = $("#name").val();
    var desc = $("#desc").val();
    var date = $("#date").val();
    var strt = $("#strt").val();
    $("#name1").text(name);
    $("#desc1").text(desc);
    $("#date1").text(date);
    $("#strt1").text(strt);
    $("#output").show();
    event.preventDefault();
  });
});
