$(function() {
    $('.circle_htmlcss').percentcircle({
        fillColor: '#f16529',
    });
    $('.circle_js').percentcircle();
    $('.circle_cpp').percentcircle({
        fillColor: '#66f400',
    });
    $('.circle_php').percentcircle({
        fillColor: '#A83EFF',
    });
    $('.circle_mysql').percentcircle({
        fillColor: '#8bc0ff',
    });
    $('.circle_unix').percentcircle({
        fillColor: '#ffa73f',
    });
    $('.circle_ror').percentcircle({
        fillColor: '#ff0000',
    });
    $('.circle_node').percentcircle({
        fillColor: '#8fc84e',
    });
    $('.circle_react').percentcircle({
        fillColor: '#6ed0f2',
    });
    $('.circle_git').percentcircle({
        fillColor: '#f03c2e',
    });
    $('.circle_java').percentcircle({
        fillColor: '#da2b2a',
    });
    $('.circle_asp').percentcircle({
        fillColor: '#3c3a3d',
    });

    $('.a_nav').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 50
        }, 500);
        return false;
    });

    $('#a_home').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});
