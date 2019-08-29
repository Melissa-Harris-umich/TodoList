


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
        console.log("You hit enter!!")
    }
});


