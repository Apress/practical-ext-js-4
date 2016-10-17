Ext.define("Chapter09.controller.LoginController", {
    extend: "Ext.app.Controller",
    refs: [
        { ref: "userName", selector: "#usernametext" },
        { ref: "password", selector: "#passwordtext" }
    ],
    views: ["LoginScreen"],
    init: function () {
        this.control({
            "#loginbutton": {
                click: this.authenticate
            }
        });
    },
    authenticate: function () {
        if (this.getUserName().getValue() == "admin" &&
            this.getPassword().getValue() == "admin") {
            this.application.viewport.add({ xtype: "home", id: "homescreen"});
            this.application.viewport.getLayout().setActiveItem(1);
        }
        else
            Ext.Msg.alert("Invalid credentials");
    }
});