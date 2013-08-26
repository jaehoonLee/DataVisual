Ext.define('Pandora.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',

    requires: [
        'Pandora.view.TestPanel',
        'Pandora.view.SearchPanel'
    ],

    initComponent: function () {
        this.items = {
            layout: 'border',
            border: false,
            items: [
                {
                    region: 'center',
                    title: '',
                    border: false,
                    layout: 'border',
                    items: [
//                        {
//                            split: true,
//                            autoScroll: true,
//                            region: 'left',
//                            xtype: 'searchPanel'
//                        },
                        {
                            split: true,
                            autoScroll: true,
                            region: 'center',
                            xtype: 'testPanel'
                        }
                    ]
                }
            ]
        };

        this.callParent(arguments);
    }
});