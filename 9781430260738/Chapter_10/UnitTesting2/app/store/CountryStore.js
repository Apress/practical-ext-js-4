Ext.define("Chapter10.store.CountryStore",{
	extend : "Ext.data.Store",
	autoLoad : false,
	model : "Chapter10.model.Country",
	proxy : {
		url : "countries.txt",
		type : "ajax",
		reader : {
			type : "json",
			root : "countries"
		}
	}
});