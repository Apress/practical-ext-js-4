describe("Country Store", function () {
    var store = null;
    beforeEach(function () {
        store = Application.getStore("CountryStore");
        store.load();
        waitsFor(function () {
            return !store.isLoading();
        }, "Unable to load countries.txt", 5000);
    });

    it("test store data", function () {
        expect(store.getCount()).toEqual(4);
        var country = store.getAt(0);
        expect(country.get("name")).toEqual("India");
        expect(country.get("capital")).toEqual("New Delhi");
        expect(country.get("continent")).toEqual("Asia");
    });


});
