$(document).ready(function() {
    var folder = "./assets/images/home/";

    $.ajax({
        url : folder,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpg)$/) ) {
                    $(".main__projects-contents").append( "<img src='"+ val +"'>" );
                } 
            });
        }
    });

    /* Modal */
    let modal = document.getElementsByClassName("main__selectedprojects-project-modal");
    let btn = document.getElementsByClassName("main__selectedprojects-project-info");
    let span = document.getElementsByClassName(
    "main__selectedprojects-project-modal-content-close"
    );

    for (let i = 0; i < modal.length; i++) {
    btn[i].onclick = function () {
        modal[i].style.display = "block";
    };

    span[i].onclick = function () {
        modal[i].style.display = "none";
    };
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    };
})