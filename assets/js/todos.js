


//Check off specific todos once clicked
//When an li is clicked inside this ul.
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed")
});

//When span is clicked, todo will fade out
//Events have to exist before if appending things that will eventually change
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function() {
        $(this).remove();

    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){

        //take input from input and store in variable
        var todoText = $(this).val();

        //create new li and add to ul using append
        $("ul").append("<li> <span>X </span>" + todoText+ "</li>");
    }
});


