Ext.define("Chapter09.view.home.ProjectActionItemGrid", {
    extend: "Ext.grid.Panel",
    xtype: "projectactionitemgrid",
    title: "Action items",
    store: null,
    columns: [
                 { header: "No", dataIndex: "sno", width: 30 },
                 { header: "Action Item", dataIndex: "item", width: 200 },
                 { header: "Action Officer", dataIndex: "officer" },
                 { header: "Status", dataIndex: "status", width: 150 }
             ]
});