/**
 * This script provides the interaction with the SEC filing header by allowing
 * users to toggle the visibility of the document dropdown box. The box can be shown or hidden
 * by clicking on the document links button, clicking outside the box, or tabbing out of the box.
 *
 * @author Nick Tesh
 */

let filingHeader = document.querySelector("#sec-filing-header");

if (filingHeader) {
    let documentBox = document.querySelector("#sec-filing-header--document-box");
    let documentDetails = document.querySelector("#document-details");

    // Toggle the visibility of the documents links dropdown on click
    documentDetails.addEventListener("click", function() {
        if (documentBox.style.display === "none" || !documentBox.style.display) {
            documentBox.style.display = "block";
            documentDetails.setAttribute('aria-expanded', 'true');
        } else {
            documentBox.style.display = "none";
            documentDetails.setAttribute('aria-expanded', 'false');
        }
        
        // Toggle the class "open" on the document links button
        documentDetails.classList.toggle("open");
    });

    // Hide the documents links dropdown when you click outside of the box
    document.addEventListener("click", function(event) {
        if (!documentBox.contains(event.target) && !documentDetails.contains(event.target) && documentBox.style.display !== "none") {
            documentBox.style.display = "none";
            documentDetails.classList.remove("open");
            documentDetails.setAttribute('aria-expanded', 'false');
        }
    });

    // Hide the documents links dropdown when you tab outside of the box
    documentBox.addEventListener("focusout", function(event) {
        let isMovingOutOfDocumentBox = !documentBox.contains(event.relatedTarget);
        if (isMovingOutOfDocumentBox) {
            documentBox.style.display = "none";
            documentDetails.classList.remove("open");
            documentDetails.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * This script checks if the lang attribute is present on the filing HTML element
 * If the lang attribute is not present, it will add it and set it to "en"
 */
 
let htmlElement = document.documentElement;

// Check if the 'lang' attribute is present
if (!htmlElement.hasAttribute('lang')) {
    // Set the 'lang' attribute to 'en'
    htmlElement.setAttribute('lang', 'en');
}