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
				var that = this;

					var oItem = {
						"ID": ID.getValue(),
						"Name": name.getValue(),
						"Rating": rating.getValue(),
						"Price": price.getValue(),
						"ReleaseDate": rdate.getValue()
					};
					
				if (oEvent.getSource().getText() === "Create") {


					this.getView().getModel().create("/Products", oItem, {
						success: function(oResponse) {
							sap.m.MessageToast.show("Created Successfully");
							that.getView().getModel().refresh();
						},
						error: function(error) {
							sap.m.MessageToast.show("Error");
							that.getView().getModel().refresh();
						}
					});
				} else {
					this.getView().getModel().update("/Products("+ID.getValue()+")",oItem,{
						success: function(oResponse) {
							sap.m.MessageToast.show("Updated Successfully");
							that.getView().getModel().refresh();
						},
						error: function(error) {
							sap.m.MessageToast.show("Error");
						}	
					});
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