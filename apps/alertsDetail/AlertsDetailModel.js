/**
 * Created by Ahmet Sarica on 21.05.2017.
 */
var AlertsDetailModel = function () {
    var _this = this;


    _this.getNoteData = function (_successFunction) {
        var operationSucess = false;
        var request = $.ajax({
            url: "notes.json",
            data: {},
            async: true,
            type: "GET",
            cache: true,
            dataType: "json",
            crossDomain: true,
            success: function (json) {
                _successFunction(json.notes);
            },
            error: function (e) {
                framework.handleErrorMessages(e);
            },
            complete: function (e, xhr) {
            }
        });
    }
}