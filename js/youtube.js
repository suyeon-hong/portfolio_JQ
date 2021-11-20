

init();
bindingEvent();

function init(){
    const frame = $("#vidGallery");
    const key = "AIzaSyDLlgfKVBsGJubow2HpPxjC1LJgGRtpBHA";
    const playlist = "PLbO44G2j_RJzPLODoK6qiJwJ39JK4JyCY";
    const num = 10;
}

function bindingEvent(){
    createVid();

    $("body").on("click", frame.selector +(" article .play"), function(e){
        e.preventDefault();
    
        let vidId = $(e.currentTarget).parent().find("a").attr("href");
    
        $("body").append(
            $("<div class='pop'>").append(
                $("<iframe>").attr({
                    src: "https://www.youtube.com/embed/"+ vidId,
                    width: "100%",
                    height: "100%",
                    frameborder: 0,
                    allowfullscreen: true,
                }),
                $("<span class='close'>").text("CLOSE")
            )
        )
    });
    
    $("body").on("click", ".close", function(){
        $(".pop").remove();
    })
}

function createVid(){
    $.ajax({
        url:"https://www.googleapis.com/youtube/v3/playlistItems",
        dataType: "jsonp",
        data: {
            part: "snippet",
            key: key,
            maxResults: num,
            playlistId: playlist
        }
    }).success(function(data){
        let items = data.items;
    
        $(items).each(function(_, data){
            let txt = data.snippet.description;
            let len = txt.length;
    
            if (len > 200){
                txt = txt.substr(0, 200)+ "..";
            }
    
            $(frame).append(
                $("<article>").append(
                    $("<a>").attr({
                        href : data.snippet.resourceId.videoId
                    }).append(
                        $("<img>").attr({src: data.snippet.thumbnails.high.url})
                    ),
                    $("<h3>").text(data.snippet.title),
                    $("<p>").text(txt),
                    $("<span class='play'>").text("비디오재생").append(
                        $("<i class='fas fa-play'>")
                    )
                )
            )
        });
    }).error(function(err){
        console.error(err);
    });
}