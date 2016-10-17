Ext.Loader.setConfig({enabled : true});

var Application = null;

Ext.onReady(function() {
    Application = Ext.create('Ext.app.Application', {
        name: 'Chapter10',
        controllers: ["CountryController"],
        launch: function() {
            jasmine.getEnv().addReporter(new jasmine.HtmlReporter());
            jasmine.getEnv().execute();
        }
    });
});