function color()
{
    var col=["dubai.jpg","kodaicanal.jpg","kerala.jpg","saudi.jpg","paris.jpg","indiagate.jpg","taj.jpg"]
    var len=col.length
    var ran=Math.random()*len
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../Asset/img/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){color()},1000)
    function imgK(pic,heading,description)
{
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imgheading").innerHTML=heading;
    document.getElementById("imgparagraph").innerHTML=description
    bigscreen.style.display="flex"
    fullImg.src=pic;
}
function imgV()
{
    document.getElementById("bigscreen").setAttribute("style","display:none")
}
    
}
