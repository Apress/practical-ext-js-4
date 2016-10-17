Ext.Loader.setConfig({enabled:true});
Ext.application({
	name : "Chapter10",
	controllers : ["CountryController"],
	launch : function(){
		Ext.create("Ext.container.Viewport",{
			renderTo : Ext.getBody(),
			items : [
			         	{
			         		xtype : "countrygrid"
			         	}
			        ]
		});

	}
});