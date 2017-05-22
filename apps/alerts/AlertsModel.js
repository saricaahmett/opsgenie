/**
 * Created by Ahmet Sarica on 21.05.2017.
 */
var AlertsModel = function () {
    var _this = this;




    _this.getAlerts = function(_successFunction){
        var operationSucess = false;
        var request = $.ajax({
            url: "alerts.json",
            data:{},
            async:true,
            type:"GET",
            cache:true,
            dataType:"json",
            crossDomain:true,
            xhrFields: {
                withCredentials: true
            },
            success:function (json) {
                _successFunction(json);
            },
            error: function(e){
                framework.handleErrorMessages(e);
            },
            complete:function (e, xhr) {
            }
        });
    }
}