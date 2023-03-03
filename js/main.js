import { getUserIpAddress } from "./getUserIpAddress.js";
import { searchIpAddress } from "./searchIpAddress.js";

getUserIpAddress();

const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

searchBar.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchIpAddress(this.value);
        searchBar.value = "";
    }
});

searchButton.addEventListener("click", () => {
    searchIpAddress(searchBar.value);
    searchBar.value = "";
});