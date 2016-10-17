Ext.define("Chapter09.view.home.ProjectActionItemDetailsPanel", {
    extend : "Ext.form.Panel",
    xtype: "projectactionitemdetails",
    border: false,
    items: [
                {
                    xtype: "fieldset", title: "Details", defaults: { xtype: "textfield", disabled: true },
                    items: [
                        { name: "sno", fieldLabel: "No" },
                        { name: "item", fieldLabel: "Action Item" },
                        { name: "officer", fieldLabel: "Officer" },
                        { name: "status", fieldLabel: "Status" },
                        { name: "createdby", fieldLabel: "Created By" },
                        { name: "createddate", fieldLabel: "Created date" },
                    ]
                }
            ]
});