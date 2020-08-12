$(document).ready(function(){
  $("formOne").submit(function(event){
    const person1Input = $("input#person1").val();
  
    $("#person1").text(person1Input);
    
    $("#shouting").show;

    event.preventDefault();

  });
});