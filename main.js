$(document).ready(function () {

    char = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    $("#char-container").html("<h1 id=" + char + ">" + char + "<\h1>");

    var score = 0;
    time = 10;
    
    var interval = setInterval(function(){
    time = time - 1;

        $("#time").html(time);
        $(document).keypress(function (e) { 
            var id = "#" + e.key;
            $(id).hide(function() {
                char = String.fromCharCode(97 + Math.floor(Math.random() * 26));
                $("#char-container").html("<h1 id=" + char + ">" + char + "<\h1>");
                score = score + 5;
                $("#Score").html(score);
            });
        });

        if (time == 0) {
            clearInterval(interval);
            $("#char-container").hide();
        }
    }, 1000);
});
   