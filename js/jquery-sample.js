$(function() {
    let divs = document.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].innerHTML = `<h1>Hello jQuery! ${i} </h1>`;
    }

    $('div').click(function() {
        $(this).toggleClass('selected');
    });
    
    
    
    $('#tab1, #tab2').hide();
    
});
