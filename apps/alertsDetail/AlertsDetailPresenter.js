/**
 * Created by Ahmet Sarica on 21.05.2017.
 */
var AlertsDetailPresenter = function (_model,_view,_rowObject) {
    var _this = this;
    _this.model = _model;
    _this.view = _view;

    _this.view.setPresenter(_this);
    _this.rowObject = _rowObject;
    _this.relatedNoteArray = [];


    _this.initialize = function () {
        _this.model.getNoteData(_this.setNoteData);
    }

    _this.setNoteData = function (noteData) {

        if(noteData.length>0){
            for(var i=0;i<noteData.length;i++){
                if(noteData[i].alertId == _this.rowObject.id){
                    _this.relatedNoteArray.push(noteData[i]);
                }
            }
        }

        _this.view.listDetail();
    }
}