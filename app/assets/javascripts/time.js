// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

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

    while (!watchword) {
        var watchword = prompt("コメントを受け取る合言葉を入力して下さい", "");
    }
    var milkcocoa = new MilkCocoa('yieldijxl4pvn.mlkcca.com');
    var milkcocoaDS = milkcocoa.dataStore('comment');
    var num = 0;
    milkcocoaDS.on("push", function(sentData) {
        console.log(sentData.value);
        if (sentData.value.watchword == watchword) {
            var commentDom = $("<p></p>", {
                addClass: "comment",
                "id": num
            }).text(sentData.value.content).css({
                top: (Math.random() * 90) + "%"
            });
            $("#niconicocoa").append(commentDom);
            setTimeout(function(id) {
                $("#niconicocoa #" + id).remove();
            }, 10000, num);
            num++;
        }
    });

    milkcocoaDS.push({
        content: "niconicocoa setup done!",
        watchword: watchword
    });
}, 1000);
