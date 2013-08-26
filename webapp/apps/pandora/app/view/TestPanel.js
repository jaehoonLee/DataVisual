Ext.define('Pandora.view.TestPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.testPanel',

    requires: [
         'Pandora.view.GridPanel'
     ],

    layout: {
        type: 'fit'
    },

    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    itemId: 'viewerTopToolBar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'topButton',
                            iconCls: 'tbar-page-first',
                            text: '처음으로 이동'
                        },
                        {
                            xtype: 'button',
                            itemId: 'previousButton',
                            iconCls: 'tbar-page-prev',
                            text: '이전 페이지로 이동'
                        },
                        {
                            xtype: 'button',
                            itemId: 'nextButton',
                            iconCls: 'tbar-page-next',
                            text: '다음 페이지로 이동'
                        },
                        {
                            xtype: 'button',
                            itemId: 'bottomButton',
                            iconCls: 'tbar-page-last',
                            text: '마지막 페이지로 이동'
                        },
                        '-',
                        {
                            xtype: 'button',
                            itemId: 'downloadButton',
                            text: '다운로드'
                        },
                        '->',
                        {
                            xtype: 'button',
                            itemId: 'viewerRefreshButton',
                            iconCls: 'icon_refresh',
                            text: '갱신'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridPanel',
                    autoScroll: true,
                    border: false,
                    animCollapse: false
                }
            ]
        });
        me.callParent(arguments);
    }
});