var Framework = function () {
    this.initialize = function () {
        var _this = this;
        _this.pageLoader = new PageLoader($("#content-container"));
        _this.popup = new CustomPopup();

        _this.backArray = new Array();
        _this.forwardArray = new Array();

        framework.goToAlerts();

        $("#back").off("click");
        $("#back").on("click",function () {
            _this.pageLoader.back();
        });

        $("#forward").off("click");
        $("#forward").on("click",function () {
            _this.pageLoader.forward();
        });


    }
}

Framework.prototype.getObjectById=function (id,array,idFieldName) {
    if(array.length>0){
        for(var i=0;i<array.length;i++){
            if(id == array[i][idFieldName]){
                return array[i];
            }
        }
    }
}


Framework.prototype.goToAlerts = function () {
    framework.pageLoader.loadPage(Pages.ALERTS, function () {
        var alertsModel = new AlertsModel();
        var alertsView = new AlertsView();
        var alertsPresenter = new AlertsPresenter(alertsModel,alertsView);
        alertsPresenter.initialize();
    });
}

Framework.prototype.goToAlertsDetail = function (rowObject) {
    framework.pageLoader.loadPage(Pages.ALERTSDETAIL, function () {
        var alertsDetailModel = new AlertsDetailModel();
        var alertsDetailView = new AlertsDetailView();
        var alertsDetailPresenter = new AlertsDetailPresenter(alertsDetailModel,alertsDetailView,rowObject);
        alertsDetailPresenter.initialize();
    });
}

Framework.prototype.goToPage2 = function () {
    framework.pageLoader.loadPage(Pages.PAGE2, function () {
    });
}

Framework.prototype.goToPage3 = function () {
    framework.pageLoader.loadPage(Pages.PAGE3, function () {
    });
}
Framework.prototype.goToPage4 = function () {
    framework.pageLoader.loadPage(Pages.PAGE4, function () {
    });
}


Framework.prototype.createGuid = function() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

Framework.prototype.run = function () {
    framework.goToPage2();
    setTimeout(function () {
        framework.goToPage3();
    },100)
}


Framework.prototype.openCalendar = function (data) {
    framework.popup.openCustomPopup(PopupPages.CALENDAR);

    $(document).off("popuploaded");
    $(document).on("popuploaded", function () {
        var calendar = new Calendar();
        calendar.initialize(data);
    })
}

Framework.prototype.convertMillisecondToDate = function (date) {
    var singledate = "/Date("+date+")/";
    var changeddate = singledate.match(/\d+/g).map(function (s) { return new Date(+s); });
    var date = new Date(changeddate);
    var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    var ddmmyyyFromateDate = [date.getFullYear(), mnth,day].join("-");

    return ddmmyyyFromateDate;
}