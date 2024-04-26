/**
 * Save a new status for the given accordion name
 * @param {string} accordionId - An accordion id
 * @param {boolean} isOpen - Is the accordion open ?
 */
function saveAccordionStatus(accordionId, isOpen) {

    // Get current accordions data from localStorage
    const data = getAccordionsData();

    // Add or change status for the given accordion
    data[accordionId] = isOpen;

    // Save back the data in localStorage
    localStorage.setItem("accordions", JSON.stringify(data));
}


/**
 * Return an object with the saved status for all accordions
 * @returns {object} Get current data for all accordions
 */
function getAccordionsData() {

    // Get raw datas from localStorage
    const stringData = localStorage.getItem("accordions");

    // No data is an empty object
    if (stringData === null) return {};

    // Parse saved data as json
    return JSON.parse(stringData);
}

/**
 * Toggle the given accordion between open and close
 * @param {element} accordionElement - Accordion element
 */
function openOrCloseAccordion(accordionElement) {
    accordionElement.classList.toggle("closed");

    const id = accordionElement.dataset.accordionFor;
    const isOpen = !accordionElement.classList.contains("closed");

    accordionElement.setAttribute("aria-expended", isOpen);

    if (!isOpen) document.getElementById(id).classList.add("hidden");
    else document.getElementById(id).classList.remove("hidden");

    // Save new status
    saveAccordionStatus(id, isOpen);
}

/**
 * Initialize all accordions on page with an attribute data-accordion-for.
 */
export default function initAccordions() {
    // Get saved status for all accordions
    const start = getAccordionsData();

    document.querySelectorAll("[data-accordion-for]").forEach(el => {
        // Close the accordion if it has been saved closed
        if (start[el.dataset.accordionFor] === false) openOrCloseAccordion(el);

        // Initialize event handler to manage click
        el.addEventListener("click", e => {
            e.preventDefault();
            openOrCloseAccordion(e.target);
        });
    })
}