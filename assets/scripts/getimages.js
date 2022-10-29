var folder = "./assets/images/home/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                $(".main__projects-contents").append( "<img src='"+ val +"'>" );
            } 
        });
    }
});