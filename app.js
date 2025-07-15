$(document).ready(function () {


$("#me").click(function (e) { 
    e.preventDefault();
    
    function chat(msg = "") {
        if (!$.trim($("#inputme").val()) == '') {
            let newval = $("#inputme").val()
                , newH3 = $('<h3> </h3>')
                , newLine = $('<div class="line"> </div>')
                , inmessage = $(`<div ${msg} > </div>`)
            $(newH3).append(newval)
            $(newLine).append(newH3)
            $(inmessage).append(newLine)
            return inmessage
        }
        else {
            return 
        }
    }
    $("#messageyou").append(chat())
    $("#messageme").append(chat('class="end"'))
    $("#inputme").val("")
    document.querySelector("#messageme").scrollTo(0, document.querySelector("#messageme").scrollHeight)
    document.querySelector("#messageyou").scrollTo(0, document.querySelector("#messageyou").scrollHeight)
});


$("#you").click(function (e) { 
    e.preventDefault();
    
    function chat(msg = "") {
        if (!$.trim($("#inputyou").val()) == '') {
            let newval = $("#inputyou").val()
                , newH3 = $('<h3> </h3>')
                , newLine = $('<div class="line"> </div>')
                , inmessage = $(`<div ${msg} > </div>`)
            $(newH3).append(newval)
            $(newLine).append(newH3)
            $(inmessage).append(newLine)
            return inmessage
        }
        else {
            return 
        }
    }
    $("#messageme").append(chat())
    $("#messageyou").append(chat('class="end"'))
    $("#inputyou").val("")
    document.querySelector("#messageme").scrollTo(0, document.querySelector("#messageme").scrollHeight)
    document.querySelector("#messageyou").scrollTo(0, document.querySelector("#messageyou").scrollHeight)
});


});