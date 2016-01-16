$(document).ready(function(){
    var portfolio_carousel = $("#inner_portfolio");
    var items = portfolio_imgs.map(function(obj) {
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
    console.log(items);
    console.log(portfolio_carousel);

    portfolio_carousel.append(items);

    var portfolio_indicators = $("#portfolio_indicators");
    var indicators = portfolio_imgs.map(function(obj, i) {
        var li = document.createElement('li');
        $(li).attr('data-target',"#portfolio");
        $(li).attr('data-slide-to', i + 1);
        return li;
    })
    console.log(indicators);
    portfolio_indicators.append(indicators);

});


// <div class="item">
//     <!-- Set the third background image using inline CSS below. -->
//     <div class="fill">
//         <div class="background-img" style="background-image:url('images/woman_on_black.jpg');"></div>
//         <img class="slider-img" src="images/woman_on_black.jpg" >
//     </div>
//     <div class="carousel-caption">
//         <h2>Caption 6</h2>
//     </div>
// </div>

// <li data-target="#Portfolio" data-slide-to="1"></li>
// <li data-target="#Portfolio" data-slide-to="2"></li>
// <li data-target="#Portfolio" data-slide-to="3"></li>
// <li data-target="#Portfolio" data-slide-to="4"></li>
// <li data-target="#Portfolio" data-slide-to="5"></li>
