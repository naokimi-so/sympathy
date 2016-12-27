$(function() {

    if (getQueryString().id) {
        $("#js_inputWatchword").val(getQueryString().id);
        $("#js_presenWatch").val(getQueryString().id);
    }

    //エンターでコメント送信は出来るけどsubmitはしないように
    $("#js_commentForm").on("submit", function() {
        return false;
    });

    $("#js_submitBtn").on("click", function() {

        var sendtext = $("#js_inputText").val();
        var _sendData = {
            content: sendtext,
            watchword: watchword
        };

        if ((!sendtext == "")) {

            console.log(_sendData);
            ds.push(_sendData, function() {
                if (getQueryString().id) {
                    location.reload();
                } else {
                    location.replace(location.href + "?id=" + watchword);
                }
            });
        }
    });

    (function slideSetup() {
        if (getQueryString().slide) {
            var slideframe = $("<iframe></iframe>", {
                    addClass: "slide"
                })
                .attr("src", "//www.slideshare.net/slideshow/embed_code/key/" + slideid)
                .css({
                    "height": $(".comment").width() * 0.625
                });
            $("#js_slideArea").append(slideframe).show();
        }
    })();

    (function snsBtnSetup() {
        var url = escape(window.location.href);
        var text = encodeURI("niconicocoa 発表スライドにコメントを流せるサービス");
        $("#btn_fb").attr("href", "//facebook.com/sharer.php?src=bm&u=" + url);
        $("#btn_tw").attr("href", "//twitter.com/intent/tweet?url=" + url + "&text=" + text + "&hashtags=niconicocoa");
    })();

    (function presenterSetup() {
        var shareURL = "";
        $(".modal-body input").on("change", function() {
            var id = $("#js_presenWatch").val();
            var slide = encodeURI($("#js_presenSlide").val());
            if (slide.length > 0) {
                shareURL = "http://nabettu.github.io/niconicocoa/" + "?id=" + id + "&slide=" + slide;
            } else {
                shareURL = "http://nabettu.github.io/niconicocoa/" + "?id=" + id;
            }
            $("#js_shareURL").val(shareURL).addClass("anime").delay(500).queue(function(){
                $("#js_shareURL").removeClass("anime").dequeue();
            });
            $("#js_toCommentURL").attr("href", shareURL);
            qrcodegenerate();
        })
        $("#js_shareURL").on("focus", function() {
            $(this).select();
        })
        $("#js_showQRCodeBtn").on("click", function() {
            if (shareURL) {
                $("#js_qrcodeArea").show();
                qrcodegenerate();
            }
        })
        function qrcodegenerate(){
            $("#js_qrcodeArea").html("").qrcode({
                width: 100,
                height: 100,
                text: shareURL
            });
        }
        $("#js-bookmarklet").hover(function() {
            this.select();
        }, function() {})

    })();

});

function getQueryString() {
    var result = {};
    if (1 < window.location.search.length) {
        var query = window.location.search.substring(1);
        var parameters = query.split('&');
        for (var i = 0; i < parameters.length; i++) {
            var element = parameters[i].split('=');
            var paramName = decodeURIComponent(element[0]);
            var paramValue = decodeURIComponent(element[1]);
            result[paramName] = paramValue;
        }
    }
    return result;
}
