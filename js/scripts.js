$(document).ready(function() {

  $("#formOne").submit(function() {

    event.preventDefault();
    var option = $("input:radio[name=option]:checked").val();
    var option = $("input:radio[name=second]:checked").val();
    var option = $("input:radio[name=third]:checked").val();
    var option = $("input:radio[name=fourth]:checked").val();
    var option = $("input:radio[name=fifth]:checked").val();

    var personInput = $("input#person").val();
    var name = $("#name").val();

    console.log(name);

    $(".person").text(personInput);
    $("#story").show();



    });
  });
