describe("CountryController", function () {
    var countryController = null;
    var countryGrid = null;
    var countryStore = null;

    beforeEach(function () {
        countryController = Application.getController("CountryController");
        countryGrid = Ext.create("Chapter10.view.CountryGrid");
        countryStore = Application.getStore("CountryStore");
        countryStore.load();
        waitsFor(function () {
            return !countryStore.isLoading();
        }, "Unable to load countries.txt", 5000);
    });

    it("test Country Grid", function () {
        var grid = countryController.getCountryGrid();
        expect(grid).toBeDefined();
        expect(grid.columns.length).toEqual(2);
    });
    it("test country grid item click", function () {
        var grid = countryController.getCountryGrid();
        grid.fireEvent("itemclick", grid.getView(), countryStore.getAt(0));
        expect(countryController.getCountryDetail()).toBeDefined();
    });
});
