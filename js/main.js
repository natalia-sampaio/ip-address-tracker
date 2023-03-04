import { getUserIpAddress } from "./getUserIpAddress.js";
import { searchIpAddress } from "./searchIpAddress.js";

getUserIpAddress();

const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

searchBar.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (searchBar.value === "") {
            searchBar.classList.add('header__search-bar--erro');
            document.getElementById('error-message').innerHTML = `Invalid input! Empty search is not valid.`;
        } else {
            searchIpAddress(searchBar.value);
            searchBar.value = "";
            searchBar.blur();
        }
    }
});

searchButton.addEventListener("click", () => {
    if (searchBar.value === "") {
        searchBar.classList.add('header__search-bar--erro');
        document.getElementById('error-message').innerHTML = `Invalid input! Empty search is not valid.`;
    } else {
        searchIpAddress(searchBar.value);
        searchBar.value = "";
        searchBar.blur();
    }
});