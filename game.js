var resetAndStart = function (){
  $(".crystals").empty();
}

var images=[
        'https://i.ebayimg.com/images/g/CRQAAOSwjvJZOexA/s-l640.jpg'
        'https://images-na.ssl-images-amazon.com/images/I/51xYL8Z6QDL._SX425_.jpg'
        'https://images-na.ssl-images-amazon.com/images/I/41ho9rzbT-L._SX466_.jpg'
        'https://2.bp.blogspot.com/-12m-TK1_MdE/WejGa7Ri1wI/AAAAAAAANtE/o2Rsmw68fa8rw1Q4w68uwCVk4mvS7bk-wCLcBGAs/s1600/Contra%252BLuz%252BOpal%252B-%252B2%25252C290%252BCARATS%252BOpal%252BButte%25252C%252BMorrow%252BCo.%25252C%252BOregon%25252C%252BUSA.jpg'
random_result = Math.floor(Math.random()*69) + 30;
$("#result").html('Random Result: ' + random_result);

for(var i=0; i < 4; i++;){
var random = Math.floor(Math.random()* 11)+1


var crystal = $("<div>");
    crystal.attr({
        "class":'crystal',
        "data-random": random
    });   
    crystal.css({
            "background-image":"url'"+(images[i])+"'"
    });

$(".crystals").append(crystal);
}

$(".crystal").on('click',function(){
    
        var num =parseInt($(this).attr('data-random'));

        previous+= num;
        console
});       
