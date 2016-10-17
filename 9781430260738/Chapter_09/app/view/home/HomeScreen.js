Ext.define("Chapter09.view.home.HomeScreen", {
    extend: "Ext.panel.Panel",
    xtype: "home",
    layout: "border",
    padding: 30,
    items: [
               { region: "north", height: 70, title:"Welcome",titleAlign:"center", html: "Place holder for Logo and Menu" },
               {
                   region: "center",
                   items: [
                        {
                            xtype: "panel", layout: "hbox", defaults: { margin: 5, padding: 50 }, border: false,
                            items: [
                                        { xtype: "projectactionitemgrid", width: 580 },
                                        { xtype: "projectactionitemdetails", width: 400, height: 400 }
                            ]
                        }

                    ]
               },
    ]

});