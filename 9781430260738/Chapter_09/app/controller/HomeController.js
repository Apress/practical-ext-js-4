Ext.define("Chapter09.controller.HomeController", {
    extend: "Ext.app.Controller",
    id: "HomeController",
    refs: [
       { ref: "actionItemsGrid", selector: "home grid" },
       { ref: "detailsPanel", selector: "home form" }
    ],
    sno: "",
    models: ["ProjectActionItem"],
    stores: ["ProjectActionItemStore"],
    views: ["home.ProjectActionItemDetailsPanel", "home.ProjectActionItemGrid", "home.HomeScreen"],
    init: function () {
       // Ext.History.init();
        this.control({
            "#homescreen": {
                beforerender: this.loadActionItems
            },
            "home grid": {
                itemclick: this.displayDetails
            }
        });
      //  Ext.History.on("change", this.backOrForwardClicked);
    },
    backOrForwardClicked: function (token) {
        console.log("Snoop: ");
        console.log(this);
        console.log("Token: " + token);

        if (Ext.getController("HomeController").sno != token) {
            var store = Ext.getStore("ProjectActionItemStore");
            this.displayDetails(null, store.findRecord("sno", token));
        }
    },
    displayDetails: function (src, record) {
        this.getDetailsPanel().loadRecord(record);
       // this.getController("HomeController").sno = record.get("sno");
      //  console.log("Sno: " + this.getController("HomeController").sno);
      //  Ext.History.add(record.get("sno"));
    },
    loadActionItems: function () {
        var store = Ext.getStore("ProjectActionItemStore");
        store.load();
        this.getActionItemsGrid().reconfigure(store);
    }
});