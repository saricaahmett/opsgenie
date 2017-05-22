/**
 * Created by Ahmet Sarica on 22.05.2017.
 */
var Calendar = function () {
    var _this = this;

    _this.initialize = function (data) {
        $('#calendar').fullCalendar({
            events: data
        });
    }
}