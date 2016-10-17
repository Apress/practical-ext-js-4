Ext.define("Chapter10.controller.CountryController", {
    extend: "Ext.app.Controller",
    models: ["Country"],
    stores: ["CountryStore"],
    views: ["CountryGrid", "CountryDetailWindow"],
    refs: [
        { ref: "countryGrid", selector: "countrygrid" },
        { ref: "countryDetail", selector: "countrydetail" },
        { ref: "continent", selector: "countrydetail label[id=continentlabel]" },
        { ref: "capital", selector: "countrydetail label[id=capitallabel]" },
    ],
    init: function () {
        Ext.getStore("CountryStore").load();
        this.control({
            "countrygrid": {
                itemclick: this.onCountryClicked
            }
        });
    },
    onCountryClicked: function (src, record) {
        if (!this.getCountryDetail()) {
            Ext.create("Chapter10.view.CountryDetailWindow");
        }
        this.getCountryDetail().setTitle(record.get("name"));
        this.getCapital().setText(record.get("capital"));
        this.getContinent().setText(record.get("continent"));
        this.getCountryDetail().show();
    }
});