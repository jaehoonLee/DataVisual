Ext.define('Pandora.view.GridPanel', {
	extend:'Ext.panel.Panel',
	alias:'widget.gridPanel',

	layout:'fit',
	border:false,

	stores:['BookStore'],

	initComponent:function () {
		this.items = [
			{
				xtype:'grid',
                itemId:'gridPanel',
                border:false,
				stripeRows:true,
				columnLines:true,
				columns:[
					{text:'제 목', flex:1, dataIndex:'subject'},
					{text:'저 자', flex:1, dataIndex:'writer'},
					{text:'출판사', flex:1, dataIndex:'publisher'},
					{text:'대여 여부', flex:1, dataIndex:'rent_check'}
				],
				store:'BookStore'
			}
		];

		this.callParent(arguments);
	}
});
