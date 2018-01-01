// sve što može jQuery može se napraviti pomoću čistog JavaScript koda. Ovako je samo lakše.

$("#rotiraj").click(function(){
    var sadrzaji=[];
    //sadržaje div-ova izvuči u niz
    $(".slika").each(function( indeks, vrijednost ) {
        sadrzaji.push($(this).html());
    });
    //"promješati" niz
    shuffle(sadrzaji);
    //vratiti nazad u div-ove
    $(".slika").each(function( indeks, vrijednost ) {
        $(this).html(sadrzaji.pop());
    });
    return false;
});


$(".cell").click(function(){
    if($(this).html().trim().indexOf("input")!==-1){
        return;
    }
    var id="a" + Math.random();
    $(this).html("<input id=\"" + id + "\" type=\"text\" value=\"" + $(this).html().trim()  + "\" />");
    setTimeout(function(){document.getElementById(id).focus();},100);
    $("input").focusout(function() {
        $(this).parent().html($(this).val());
    });
});


/*
korisniji jQuery događaji
.click()
.dblclick()
.keyup()
.mouseenter()
.mouseleave()

Efekti

.fadeIn()
.fadeOut()
.hide()
.show()
.animate()


ostalo
.attr()
.html()
.css()

više na https://api.jquery.com/
*/