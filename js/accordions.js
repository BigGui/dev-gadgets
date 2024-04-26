/**
 * Initialize all accordions on page with an attribute data-accordion-for.
 */
export default function initAccordions() {
    document.querySelectorAll("[data-accordion-for]").forEach(element => {
        element.addEventListener("click", function (event) {
            this.classList.toggle("closed");
            const content = document.getElementById(this.dataset.accordionFor);
            if (this.classList.contains("closed")) content.classList.add("hidden");
            else content.classList.remove("hidden");
        })
    })
}