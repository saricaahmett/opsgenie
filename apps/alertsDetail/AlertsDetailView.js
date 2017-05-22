/**
 * Created by Ahmet Sarica on 21.05.2017.
 */
var AlertsDetailView = function () {
    var _this = this;

    _this.presenter = null;
    _this.setPresenter = function (value) {
        _this.presenter = value;
    }



    _this.listDetail = function () {

        $(".label-content[task='owner']").text(_this.presenter.rowObject.owner);
        $(".label-content[task='count']").text(_this.presenter.rowObject.count);
        $(".label-content[task='acknowledge']").text(_this.presenter.rowObject.acknowledged);
        $(".label-content[task='tag']").text(_this.presenter.rowObject.tag);
        $(".label-content[task='seen']").text(_this.presenter.rowObject.isSeen);
        $(".label-content[task='createdAt']").text(_this.presenter.rowObject.createdAt);
        $(".label-content[task='snoozed']").text(_this.presenter.rowObject.snoozed);
        $(".label-content[task='snoozedUntil']").text(_this.presenter.rowObject.snoozedUntil);

        _this.listNotes();
    }


    _this.listNotes=function () {
        var noteContainer = $("#note-container");
        if(_this.presenter.relatedNoteArray.length == 0){
            noteContainer.append("<div class='no-item'>No notes available</div>");
        }
        else {
            var message = "";

            for(var i=0;i<_this.presenter.relatedNoteArray.length;i++){



                if(_this.presenter.relatedNoteArray[i].note.trim().length ==0){
                    message = "No message available";
                }
                else{
                    message = _this.presenter.relatedNoteArray[i].note;
                }
                var row = $(GenerateDomElement({
                    nodeType: "div",
                    classNames: "row note-row",
                    id: '',
                    htmlContent: '<div class="col s12 m12 l12">' +
                        message+
                    '</div>'
                }));
                noteContainer.append(row);
            }
        }
    }
}