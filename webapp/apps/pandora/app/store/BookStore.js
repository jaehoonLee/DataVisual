Ext.define('Pandora.store.BookStore', {
    extend: 'Ext.data.Store',
    requires: 'Pandora.model.Book',
    model: 'Pandora.model.Book',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '/apps/pandora/data/Booklist.json',
        headers: {
            'Accept': 'application/json'
        },
        reader: {
            type: 'json',
            root: 'books',
            totalProperty: 'totalCount'
        }
    }
});