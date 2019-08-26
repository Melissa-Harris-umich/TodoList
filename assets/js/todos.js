//Check off specific todos once clicked
$("li").click(function() {
    $(this).css("color","gray");
    $(this).css("text-decoration", "line-through");
});

