Ext.define('Pandora.view.SearchPanel', {
    extend: 'Ext.panel.Panel',
    alias:'widget.searchPanel',

//    renderTo: Ext.getBody(),
//    title: 'Search book',
//    width: 600,
//    bodyPadding: 10,
//    layout: 'anchor',

//    stores:['BookStore'],

    items: [{
          xtype: 'combo'
//        displayField: 'title',
//        typeAhead: false,
//        hideLabel: true,
//        hideTrigger:true,
//        anchor: '100%'
//
//        listConfig: {
//            loadingText: 'Searching...',
//            emptyText: 'No matching posts found.',
//
//            // Custom rendering template for each item
//            getInnerTpl: function() {
//                console.log("검색어는"+ this);
//            }
//         }
    }
//    , {
//        xtype: 'component',
//        style: 'margin-top:10px',
//        html: 'Live search requires a minimum of 4 characters.'
//    }
    ]
});