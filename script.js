$("#bar").on("click", function()
{
    $("body").toggleClass("light dark");
    $("#bar").toggleClass("bar-light bar-dark");
    $("#btn").toggleClass("btn-light btn-dark");
});