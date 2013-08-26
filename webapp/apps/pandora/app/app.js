Ext.application({
    name: 'Pandora',

    autoCreateViewport: true,

    models: ['Book'],
    stores: ['BookStore'],
    controllers: ['TestController']
});