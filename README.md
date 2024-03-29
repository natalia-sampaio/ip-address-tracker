<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=95b6f8&height=120&section=header"/>

<h1 align="center">IP address tracker solution</h1>

<div align="center">

![STATUS](https://img.shields.io/badge/status-deployed-6bffb0?style=for-the-badge)&nbsp;
![HTML 5](https://img.shields.io/badge/-HTML-0D1117?style=for-the-badge&logo=html5&logoColor=f45430&labelColor=0D1117)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-0D1117?style=for-the-badge&logo=CSS3&logoColor=1572B6&labelColor=0D1117)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript&labelColor=0D1117)&nbsp;
</div>

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

Extra features:
- Error handling
- Not allow empty request
- Display error messages to the user

### Screenshots

<div align="center">

<img src="./assets/images/Screenshot%202023-03-05%20at%2012-25-21%20IP%20Address%20Tracker.png" height="500px">
<img src="./assets/images/Screenshot%202023-03-05%20at%2012-25-51%20IP%20Address%20Tracker.png" height="500px">
<img src="./assets/images/Screenshot%202023-03-05%20at%2012-24-43%20IP%20Address%20Tracker.png" width=>
<img src="./assets/images/Screenshot%202023-03-05%20at%2012-25-59%20IP%20Address%20Tracker.png">
</div>

### Links

- Solution URL: [GitHub](https://github.com/natalia-sampaio/ip-address-tracker)
- Live Site URL: [Vercel](https://ip-address-tracker-qbqnc5mx8-natalia-sampaio.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- BEM for naming methodology
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I was able to practice and learn more about JavaScript Async functions as well as how to do error handling and display custom messages for specific erros, this is the first time I have ever done somethig like this.

```js
export async function searchIpAddress(searchedIpAddressOrDomain, popupMessage) {
    resetSearchBarErrorState();
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${searchedIpAddressOrDomain}`;

    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`${response.status}`);
        }

        const responseJson = await response.json();
        clearSearchBar();
        if(!popupMessage) {
            popupMessage = `This is the location of ${searchedIpAddressOrDomain}`;
        }
        return updatePage(responseJson, popupMessage);
    } catch (error) {
        displayErrorMessage(error);
    }
}
```
```js
export function displayErrorMessage(error) {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.add('header__search-bar--erro');
    const message = document.getElementById('error-message');
    
    if (error.message === "422") {
        message.innerHTML = "&#9888 Error: 422 - Unprocessable Entity - this is not an IP address nor a domain.";
    } else if (error.message === "400") {
        message.innerHTML = "&#9888 Error: 400 -  Bad Request - this IP Address or Domain does not exist.";
    } else {
        console.log(error)
        alert(error);
    }
}
```
### Continued development

I would like to keep improving the use of JavaScript and also learn Vue.js 3.

### Useful resources

- [bobbyhadz's blog](https://bobbyhadz.com/blog/javascript-get-response-status-code-fetch) - This is an amazing article which helped me understand a propper way of handling exception in JS.
- [GETBEM](https://getbem.com/) - This helped me understand how to apply the BEM methodology. I'd recommend it to anyone still learning this concept.
- [Mozilla Doc](https://developer.mozilla.org) - This is the best documentation when you don't know exactly how to search a problem, it always gives a good direction to follow.

## Author

<a href="natalia.srsa@proton.me"><img src="https://img.shields.io/badge/-Email-0D1117?style=for-the-badge&logo=protonmail&labelColor=0D1117&textColor=0D1117"/></a>

<a href="https://www.linkedin.com/in/natalia-srs/"><img src="https://img.shields.io/badge/-LinkedIn-0D1117?style=for-the-badge&logo=linkedin&labelColor=0D1117&textColor=0D1117"/></a>

<a href="https://twitter.com/NataliaSRSA"><img src="https://img.shields.io/badge/-Twitter-0D1117?style=for-the-badge&logo=twitter&labelColor=0D1117&textColor=0D1117"/></a>

## Acknowledgments

My husband [@filipedanielski](https://twitter.com/filipedanielski) who is always supporting and encouraging me.


<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=95b6f8&height=100&section=footer"/>