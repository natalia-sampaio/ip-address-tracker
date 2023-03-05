const searchBar = document.getElementById('search-bar');
const message = document.getElementById('error-message');

export function resetSearchBarErrorState() {
    searchBar.classList.remove('header__search-bar--erro');
    message.innerHTML = "";
}

export function clearSearchBar() {
    searchBar.value = "";
}