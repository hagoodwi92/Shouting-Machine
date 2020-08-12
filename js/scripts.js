// $(document).ready(function(){
//   $("formOne").submit(function(event){
//     const person1Input = $("input#person1").val();
  
//     $(".person1").text(person1Input);
    
//     $("#shouting").show;

//     event.preventDefault();

//   });
// });

$(document).ready(function() {
  $("#formOne").submit(function() {
    const person1Input = $("input#person1").val();
    event.preventDefault();

    $(".person1").text(person1Input.toUpperCase());

    $("#shouting").show();

    
  });
});