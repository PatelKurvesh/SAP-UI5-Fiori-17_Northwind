sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-17_Northwind.controller.View1", {

			onSubmitPress: function(oEvent) {
				var ID = this.getView().byId("ID");
				var name = this.getView().byId("Name");
				var rating = this.getView().byId("Rating");
				var price = this.getView().byId("Price");
				var rdate = this.getView().byId("RDate");

				if (oEvent.getSource().getText() === "Create") {

					var oItem = {
						"ID": ID.getValue(),
						"Name": name.getValue(),
						"Rating": rating.getValue(),
						"Price": price.getValue(),
						"ReleaseDate": rdate.getValue()
					};

					this.getView().getModel().create("/Products", oItem, {
						success: function() {
							sap.m.MessageToast.show("Created Successfully");
						},
						error: function() {
							sap.m.MessageToast.show("Error");
						}
					});
				} else {
					sap.m.MessageToast.show("Error");
				}
			},

			onListPress: function(oEvent) {
				this.byId("btnUpdate").setVisible(true);
				this.byId("btnCreate").setVisible(false);
				var sPath = oEvent.getParameter("listItem").getBindingContext().sPath;
				this.byId("sform").bindElement(sPath);
			}

		

	});
});