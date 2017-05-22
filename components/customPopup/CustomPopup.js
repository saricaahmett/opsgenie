CustomPopup = function(){
    var _this = this;
    _this.mainContainer = $('body');

    _this.openCustomPopup = function(_page) {
        var zindex = 999;
        var popupGlass = $($('.customPopupGlass')[$('.customPopupGlass').length - 1]);

        if(popupGlass.length > 0){
            var zindex = parseInt(popupGlass.css('z-index'));
            zindex++;
        }


        _this.mainContainer.append('<div  class="customPopupGlass">' +
            '<i class="material-icons" id="close-popup-button">close</i>'+
                                        '<div class="customPopupContainer hide-popup">' +
                                            '<div class="row popupTitleWrapper">' +
                                                /*'<div class="col s12 customPopupTitle pull-left">'+ pageTitle+'</div>'+*/
                                                '<span class="closeCustomPopup pull-right"><i class="fa fa-remove"></i></span>' +
                                            '</div>'+
                                            '<div class="row">' +
                                                '<div class="customPopupLoadArea"></div>'+
                                            '</div>'+
                                        '</div>' +
                                    '</div>');



       setTimeout(function () {
            $(".customPopupContainer:last").removeClass("hide-popup");
        },200)



        var windowHeight = $(window).height();
        var popupHeight = windowHeight - 100;
        $('.customPopupContainer:last').css("height", popupHeight);

        $(window).resize(function () {
            var windowHeight = $(window).height();
            var popupHeight = windowHeight - 100;
            $('.customPopupContainer:last').css("max-height", popupHeight);
        });

        $('.closeCustomPopup').off('click');
        $('.closeCustomPopup').on('click',function () {

            $(document).trigger("popupClosed");

            _this.closeCustomPopup();
        })


        var pageLoader = new PageLoader($(".customPopupLoadArea:last"),true);

        pageLoader.loadPage(_page, function () {
            $(document).trigger("popuploaded");
        }, true);


        $("#close-popup-button").off("click");
        $("#close-popup-button").on("click",function () {
            _this.closeCustomPopup();
        });
    }

    _this.closeCustomPopup = function () {

        $('.customPopupGlass:last').addClass("hide-popup");
        setTimeout(function () {
            $('.customPopupGlass:last').remove();
        },200)
    }
}