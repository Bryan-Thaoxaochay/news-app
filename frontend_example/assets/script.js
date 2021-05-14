window.onload = function ready(){
    for (i=0; i < 8; i++) {
        let majCard = $("<figure>");
    majCard.attr("class", "card text-white bg-primary");
    majCard.css({"display": "inline-block", "font-size": "medium", "text-align": "center", "margin": "10px", "width": "150px", "height": "100px", "float": "right",})
    let majTitle = $("<p>").html("article")
    majCard.append(majTitle);
    $("#majNews").append(majCard);
    }

    for (i=0; i < 5; i++) {
    let locCard = $("<figure>");
    locCard.attr("class", "card text-white bg-primary");
    locCard.css({"display": "inline-block", "font-size": "medium", "text-align": "center", "margin": "10px", "width": "100px", "height": "80px", "float": "right",})
    let locTitle = $("<p>").html("article")
    locCard.append(locTitle);
    $("#locNews").append(locCard);
    }
}
