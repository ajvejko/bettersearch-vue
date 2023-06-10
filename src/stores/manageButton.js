import { reactive } from "vue";
import { windowManagement } from "./manageWindow";

export const buttonManagement = reactive({
  list: [],
  name: "",
  home: "",
  search: "https://www.google.com/search?q=",
  toggleButton(name, home, search) {
    //Check to properly toggle selected button
    if (buttonManagement.name === name) {
      this.name = "";
      this.home = "";
      this.search = "https://www.google.com/search?q=";
    } else {
      this.name = name;
      this.home = home;
      this.search = search;
    }
  },
  deleteButton(name) {
    //Get index of the button clicked
    const index = this.list.findIndex((link) => link.name === name);
    //Remove the links
    this.list.splice(index, 1);
    //Update local storage
    localStorage.setItem("links", JSON.stringify(this.list));
    windowManagement.manageEdit();
  },
  //Function that edits the buttons properties
  editButton(name, home, search) {
    //loop through the links and change properties of the matched one
    const newLinks = this.list.map((link) => {
      if (link.name === name || link.home === home || link.search === search) {
        link.name = name;
        link.home = home;
        link.search = search;
      }
      return link;
    });
    //Update local storage with new array
    buttonManagement.list = newLinks;
    localStorage.setItem("links", JSON.stringify(newLinks));
    windowManagement.manageEdit();
  },
});
