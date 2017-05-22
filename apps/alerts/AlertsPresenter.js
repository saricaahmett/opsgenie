/**
 * Created by Ahmet Sarica on 21.05.2017.
 */

var AlertsPresenter = function (_model,_view) {
    var _this = this;
    _this.model = _model;
    _this.view = _view;
    _this.view.setPresenter(_this);


    _this.calendarData =[];

    _this.initialize = function () {
        _this.model.getAlerts(_this.setAlerts);
    }

    _this.setAlerts = function (alertsData) {


        if(alertsData.alerts.length>0){
            for(var i=0;i<alertsData.alerts.length;i++){
                var event = {
                    title:alertsData.alerts[i].owner,
                    start:framework.convertMillisecondToDate(alertsData.alerts[i].createdAtTimestamp)
                }

                _this.calendarData.push(event);
            }
        }
        debugger

        // arrange data for view.js
        _this.view.listAlerts(alertsData.alerts);
    }
}