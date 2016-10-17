Ext.define("Chapter09.store.ProjectActionItemStore", {
    extend: "Ext.data.Store",
    model: "Chapter09.model.ProjectActionItem",
    proxy: {
        type: "ajax",
        url: "data.txt",
        reader: {
            type : "json",
            root : "actionitems"
        }
    }
});