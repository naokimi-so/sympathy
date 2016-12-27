
document.body.appendChild(document.createElement("script")).src = "//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
document.body.appendChild(document.createElement("script")).src = "//cdn.mlkcca.com/v2.0.0/milkcocoa.js";

setTimeout(function() {
    var cssfile = $("<link>", {
        "href": "//nabettu.github.io/niconicocoa/presenter/style.css",
        "type": "text/css",
        "rel": "stylesheet"
    });
    $("body").append(cssfile);

    var wrapperDom = $("<div></div>", {
        "id": "niconicocoa"
    });
    var setupedTextDom = $("<p></p>", {
        addClass: 'status'
    }).text("niconicocoa is ready");

    $("body").append(wrapperDom);
    wrapperDom.append(setupedTextDom);

    wrapperReset = function() {
        setTimeout(function() {
            console.log("reset");
            wrapperDom.remove();
            $("body").append(wrapperDom);
            $("#niconicocoa").css("font-size", $(window).height() / 12 + "px");
        }, 1500);
    }

    $("#punch-start-presentation-left").on("click", function() {
        wrapperReset();
    });

    $(window).on("resize", function(e) {
        wrapperReset();
    });

    $(window).keydown(function(e) {
        if ((event.shiftKey) && (event.metaKey)) {
            if (e.keyCode === 13) {
                wrapperReset();
                return false;
            }
        }
    });
}, 1000);
