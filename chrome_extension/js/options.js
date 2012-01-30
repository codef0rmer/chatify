$(function() {
    $('#allow').click(function() {
		if (chrome.extension.getBackgroundPage().hasAuthorization()) {
            $(this).hide();
        } else {
            chrome.extension.getBackgroundPage().authorize();
        }
    });
});
