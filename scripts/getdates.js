
// Get the current year and set it in the footer
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

// Get the last modified date of the document and set it in the footer
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;



const pattern = /last_modif\s*=\s*([^;]*)/;
const lastVisit = parseFloat(document.cookie.replace(pattern, "$1"));
const lastModif = Date.parse(document.lastModified);

if (Number.isNaN(lastVisit) || lastModif > lastVisit) {
    document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname}`;
    alert("This page has been changed!");
}