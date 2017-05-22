var PreloaderController = function (container) {
    var _this = this;


    /*_this.preloader = $(GenerateDomElement({
        nodeType: "div",
        classNames: "preloader-glass hide-preloader",
        attributes: {},
        htmlContent: '<div id="box-container">' +
        '<div class="boxes"></div>' +
        '<div class="boxes"></div>' +
        '</div>'
    }));*/

    _this.preloader = $(GenerateDomElement({
        nodeType: "div",
        classNames: "preloader-glass hide-preloader",
        attributes: {},
        htmlContent: '<div class="preloader-circle"></div>'
    }));

    _this.preloaderBoxes = $(GenerateDomElement({
        nodeType: "div",
        classNames: "preloader-glass hide-preloader",
        attributes: {},
        htmlContent: '<div id="preloader-boxes-container">' +
        '<div class="preloader-boxes box-top"></div>' +
        '<div class="preloader-boxes box-right"></div>' +
        '<div class="preloader-boxes box-bottom"></div>' +
        '<div class="preloader-boxes box-left"></div>' +
        '</div>'
    }));

    _this.showPreloader = function (type) {
        if ($(".preloader-glass").length == 0) {
            if(type == undefined){
                container.append(_this.preloader);
            }
            else if(type == "box"){
                container.append(_this.preloaderBoxes);
            }
        }
        $(".preloader-glass").removeClass("hide-preloader");
    }

    _this.hidePreloader = function () {
        $(".preloader-glass").addClass("hide-preloader");
        setTimeout(function () {
            $(".preloader-glass").remove();
        }, 400)
    }

    /*    _this.preloader = $(GenerateDomElement({
     nodeType: "div",
     classNames: "preloader-glass hide",
     attributes: {},
     htmlContent:'<div class="preloader-wrapper big active">' +
     '<div class="spinner-layer">'+
     '<div class="circle-clipper left">'+
     '<div class="circle"></div>'+
     '</div>' +
     '<div class="gap-patch">'+
     '<div class="circle"></div>'+
     '</div>' +
     '<div class="circle-clipper right">'+
     '<div class="circle"></div>'+
     '</div>'+
     '</div>'+
     '</div>'
     }));


     _this.showPreloader = function () {
     if($(".spinner-layer").length == 0){
     container.append(_this.preloader);
     }
     _this.preloader.removeClass("hide");

     setTimeout(function(){
     _this.preloader.css("opacity","1");
     }, 50);
     };

     _this.hidePreloader = function () {
     _this.preloader.css("opacity","0");
     setTimeout(function(){
     _this.preloader.addClass("hide");
     }, 400);

     };*/
}