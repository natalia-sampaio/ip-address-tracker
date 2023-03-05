export function displayErrorMessage(error) {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.add('header__search-bar--erro');
    const message = document.getElementById('error-message');
    
    if (error.message === "422") {
        message.innerHTML = "Error: 422 - Unprocessable Entity - this is not an IP address nor a domain.";
    } else if (error.message === "400") {
        message.innerHTML = "Error: 400 -  Bad Request - this IP Address or Domain does not exist.";
    } else {
        console.log(error)
        alert(error);
    }
}