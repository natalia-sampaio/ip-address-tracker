import { searchIpAddress } from "./searchIpAddress.js";

export function getSearchResult() {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const message = document.getElementById('error-message');
    
    searchBar.addEventListener("keypress", function (event) {
        if(event.key === "Enter") {
            event.preventDefault();
            if (searchBar.value === "") {
                searchBar.classList.add('header__search-bar--erro');
                message.innerHTML = "&#9888 Empty search is not valid.";
            } else {
                searchIpAddress(searchBar.value);
            }
        }
    });

    searchButton.addEventListener("click", () => {
        if (searchBar.value !== "") {
            searchIpAddress(searchBar.value);
        } else {
            searchBar.classList.add('header__search-bar--erro');
            message.innerHTML = "&#9888 Empty search is not valid.";
        }
    });
}