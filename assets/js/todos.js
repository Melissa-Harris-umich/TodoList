


//Check off specific todos once clicked
$("li").click(function() {
    $(this).toggleClass("completed")
});

//When span is clicked, todo will fade out
$("span").click(function(event){
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
        $("ul").append("<li>" + todoText+ "</li>");
    }
});


