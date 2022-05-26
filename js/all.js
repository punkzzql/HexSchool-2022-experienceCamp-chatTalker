$(document).ready(function () {
    $('.answer').hide();
    $('.QA-item-list>.QA-item').click(function () {

        $li = $(this);
        $li.toggleClass('active');

        if ($li.hasClass('active')) {
            $li.find('.answer-it').css({ "background-image": "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_minus.svg')" });
        } else {
            $li.find('.answer-it').css({ "background-image": "url('https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_plus.svg')" });
        }

        $(this).find('.answer').slideToggle();
    });

});