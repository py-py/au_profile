let PhoneMaskInput = (function () {
    let pr = {},
        pub = {};

    pr.phoneMask = ['+', '3', '8', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    pr.elementPhone = document.getElementById('phone')

    pub.handle = function () {
        var maskedInputController = vanillaTextMask.maskInput({
            inputElement: pr.elementPhone,
            showMask: true,
            keepCharPositions: true,
            mask: pr.phoneMask
        });
    }

    pub.insertInHTML = function(phoneNumber) {
        var conformedPhoneNumber = vanillaTextMask.conformToMask(
            phoneNumber,
            pr.phoneMask, {
                guide: false
            }
        )
        pr.elementPhone.value = conformedPhoneNumber.conformedValue;
    }

    pub.getPhoneNumber = function () {
        return pr.elementPhone.value.replace(/\s+/g, '').replace('-', '');
    }

    return pub;
})();


;
$(document).ready(function () {
    $(".input-field input").on("focus", function (ev) {
        var parent = ev.target.parentNode;
        $(parent).addClass("active");
    });
    $(".input-field input").on("blur", function (ev) {
        var parent = ev.target.parentNode;
        $(parent).removeClass("active");
    });

    PhoneMaskInput.handle();
    // PhoneMaskInput.insertInHTML('+3805012345678');
    // console.log(PhoneMaskInput.getPhoneNumber())

});