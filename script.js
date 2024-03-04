$(document).ready(function() {
    $('#toggle-switch').change(function() {
        if ($(this).is(':checked')) {
            $('#effect-container').fadeIn();
        } else {
            $('#effect-container').fadeOut();
        }
    });
});
