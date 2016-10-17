Ext.define("Chapter10.view.CountryDetailWindow", {
    extend: "Ext.window.Window",
    xtype: "countrydetail",
    title: "Detail", height: 75, width: 200, padding: 2,
    layout : "vbox",
    items: [
        { xtype: "label", id: "capitallabel" },
        { xtype: "label", id: "continentlabel" }
    ]
});