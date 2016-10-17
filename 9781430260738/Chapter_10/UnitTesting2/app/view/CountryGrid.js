Ext.define("Chapter10.view.CountryGrid", {
    extend: "Ext.grid.Panel",
    xtype: "countrygrid",
    store: "CountryStore",
    columns: [
        { header: "Name", dataIndex: "name" },
        { header: "Capital", dataIndex: "capital" }
    ]
});