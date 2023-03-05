import { apiKey } from "./apiKey.js";
import { displayErrorMessage} from "./displayErrorMessage.js";
import { clearSearchBar, resetSearchBarErrorState } from "./resetSearchBar.js";
import { updatePage } from "./updatePage.js";

export async function searchIpAddress(searchedIpAddress, popupMessage) {
    resetSearchBarErrorState();
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${searchedIpAddress}`;

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`${response.status}`);
        }

        const responseJson = await response.json();
        clearSearchBar();
        if(!popupMessage) {
            popupMessage = "This is the location of the IP Address or domain you searched.";
        }
        return updatePage(responseJson, popupMessage);
    } catch (error) {
        displayErrorMessage(error);
    }
}