Ext.define('Pandora.controller.TestController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.testController',

    init: function () {
        this.control({
            '#viewerRefreshButton': {
                click: this.onRefreshButtonClick
            },
            '#gridPanel': {
                itemclick: this.onItemClick
            }
        });
    },

    onRefreshButtonClick: function () {
        var grid = Ext.ComponentQuery.query('#gridPanel')[0];
        var selected = grid.getSelectionModel().getSelection()[0];
        var subject = selected.data.subject;
        console.log(subject);
    },

    onItemClick: function (view, record, item, index, e, opts) {
        console.log('책제목은 ' + record.data.subject + '입니다.');
    }

});