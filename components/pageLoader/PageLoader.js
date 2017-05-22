var PageLoader = function (displayArea, isPopup) {
    var _this = this;
    _this.displayArea = displayArea;
    _this.isPopup = isPopup;


    _this.loadPage = function (page, loadComplete, isPopup) {
        _this.subView = GenerateDomElement({
            nodeType: "div",
            classNames: ["subView clearfix"],
            htmlContent: "",
            id: page.pageID/*page.pageID + "-" + framework.createGuid()*/
        });

        _this.scriptLoader(page, 0, function () {
            if (_this.isPopup != true) {
                if ($(".subView").length > 0) {
                    framework.backArray.push($(".subView").detach());
                }
            }


            $(_this.subView).appendTo(_this.displayArea).load(page.path + page.pagePath, function () {
                setTimeout(function () {
                    $(".subView").addClass("revealSubView");
                }, 100)

                if (loadComplete != undefined) {
                    loadComplete(true);
                }
            });
        });
    }


    _this.back = function () {
        if (framework.backArray.length > 0) {
            var poppedItem = framework.backArray.pop();
            $(poppedItem).removeClass("revealSubView");
            $(poppedItem).appendTo(_this.displayArea);
            setTimeout(function () {
                $(".subView").addClass("revealSubView");
            }, 300)


            $(".subView:first").removeClass("revealSubView");

            if (_this.isPopup != true) {
                setTimeout(function () {
                    framework.forwardArray.push($(".subView:first").detach());
                }, 400)
            }

        }
        else {
            console.log("no more pages to go back");
        }
    }

    _this.forward = function () {
        if (framework.forwardArray.length > 0) {
            var poppedItem = framework.forwardArray.pop();

            $(poppedItem).removeClass("revealSubView");
            $(poppedItem).appendTo(_this.displayArea);
            setTimeout(function () {
                $(".subView").addClass("revealSubView");
            }, 300)

            $(".subView:first").removeClass("revealSubView");

            if (_this.isPopup != true) {
                setTimeout(function () {
                    framework.backArray.push($(".subView:first").detach());
                }, 400)
            }

        }
        else {
            console.log("no more pages to go forward");
        }
    }

    _this.scriptLoader = function (_page, _i, _complete) {

        if (_page.dependencies.length == 0) {
            _complete();
            return false;
        }


        if (loadedScriptsList.indexOf(_page.dependencies[_i]) == -1) {
            $.getScript(_page.path + _page.dependencies[_i])
                .done(function (script, textStatus) {

                    loadedScriptsList.push(_page.dependencies[_i]);

                    if (_i == _page.dependencies.length - 1) {
                        _complete();
                    }
                    else {
                        _this.scriptLoader(_page, _i + 1, _complete);
                    }
                })
                .fail(function (jqxhr, settings, exception) {

                    console.log(exception);
                    return false;
                });
        }
        else {
            if (_i == _page.dependencies.length - 1) {
                _complete();
            }
            else {
                _this.scriptLoader(_page, _i + 1, _complete);
            }
        }
    }
}

var loadedScriptsList = new Array();