$(document).ready(function(){
    var sketchbook_carousel = $("#inner_sketchbook");
    var items = sketchbook_imgs.map(function(obj) {
        var item_div = document.createElement('div');
        item_div.className += "item";
            var fill_div = document.createElement('div');
            fill_div.className += "fill";
                var img = document.createElement('img');
                img.className += "slider-img";
                img.src = obj.url;
            fill_div.appendChild(img);
            var caption_div = document.createElement('div');
            caption_div.className += "carousel-caption";
                var caption = document.createElement('p');
                var captionNode = document.createTextNode(obj.caption);
                caption.appendChild(captionNode);
                caption_div.appendChild(caption);
        item_div.appendChild(fill_div);
        //item_div.appendChild(caption_div);
        return item_div;
    });

    sketchbook_carousel.append(items);

    var sketchbook_indicators = $("#sketchbook_indicators");
    var indicators = sketchbook_imgs.map(function(obj, i) {
        var li = document.createElement('li');
        $(li).attr('data-target',"#sketchbook");
        $(li).attr('data-slide-to', i + 1);
        return li;
    })
    sketchbook_indicators.append(indicators);

});
