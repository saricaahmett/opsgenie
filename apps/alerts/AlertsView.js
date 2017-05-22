/**
 * Created by Ahmet Sarica on 21.05.2017.
 */

var AlertsView = function () {
    var _this = this;

    _this.presenter = null;
    _this.setPresenter = function (value) {
        _this.presenter = value;
    }




    _this.listAlerts = function (data) {

        $("#calendar-button").off("click");
        $("#calendar-button").on("click",function () {
            framework.openCalendar(_this.presenter.calendarData);
        });

        var alertContainer = $("#alerts-container");

        if (data.length == 0) {
            alertContainer.find(".no-item").addClass("show");
        }
        else {
            alertContainer.find(".no-item").removeClass("show");
            for (var i = 0; i < data.length; i++) {
                
                var owner = "";

                if(data[i].owner.length==0){
                    owner ="no owner";
                }
                else{
                    owner = data[i].owner;
                }
                var row = $(GenerateDomElement({
                    nodeType: "div",
                    classNames: "col s12 m12 l12 alert-row",
                    id: data[i].id,
                    htmlContent: '<div class="is-seen lighten-2"></div>' +
                    '<div class="count-side col s2 m2 l2 row-blocks">' +
                        '<div class="count cyan lighten-2 white-text">' + 'x' + data[i].count + '</div>' +
                        '<div class="order lime lighten-2 white-text">' + '#' + i + '</div>' +
                    '</div>' +
                    '<div class="content-side col s6 m6 l6 row-blocks">' +
                        '<div class="message"></div>' +
                        '<div class="chip-container"></div>' +
                    '</div>' +
                    '<div class="ack-side col s4 m4 l4 row-blocks">' +
                        '<div class="owner">'+owner+'</div>' +
                        '<div class="created-at">'+data[i].createdAt+'</div>' +
                        '<div class="status"></div>'+
                        '<div class="fixed-action-btn horizontal">' +
                            '<a class="btn-floating orange">' +
                            '<i class="large material-icons">menu</i>' +
                            '</a>' +
                            '<ul>' +
                            '<li title="delete"><a class="btn-floating red"><i class="material-icons">close</i></a></li>' +
                            '<li title="snooze"><a class="btn-floating yellow darken-1"><i class="material-icons">snooze</i></a></li>' +
                            '<li title="assign"><a class="btn-floating blue"><i class="material-icons">subdirectory_arrow_right</i></a></li>' +
                            '</ul>' +
                        '</div>' +
                    '</div>'
                }));


                // in order to escape html tags
                row.find(".message").text(data[i].message);

                if (data[i].isSeen) {
                    row.find(".is-seen").addClass("teal");
                }
                else {
                    row.find(".is-seen").addClass("red");
                }


                if(data[i].acknowledged){
                    row.find(".status").text("Ack'ed");
                    row.find(".status").addClass("teal");
                }
                else{
                    row.find(".status").text("Open");
                    row.find(".status").addClass("red");
                }


                if (data[i].tag.length > 0) {
                    for (var j = 0; j < data[i].tag.length; j++) {
                        var chip = $(GenerateDomElement({
                            nodeType: "div",
                            classNames: "chip",
                            htmlContent: data[i].tag[j]
                        }));
                        row.find(".chip-container").append(chip);
                    }
                }

                alertContainer.append(row);
            }
        }


        $(".alert-row").off("click");
        $(".alert-row").on("click",function () {
            var rowId = $(this).attr("id");
            var rowObject = framework.getObjectById(rowId,data,"id");

            framework.goToAlertsDetail(rowObject);
        });
    }
}