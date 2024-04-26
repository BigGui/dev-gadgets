/**
 * Call asynchronously products.json file to get all products data.
 * @returns {Promise} A promise, with an array containing product data on success.
 */
export default async function getProductsFromAPI() {
    try {
        const response = await fetch("/data/products.json");
        return await response.json();
    } catch (error) {
        console.log("Problème lors du chargement des données : " + error);
        return false;
    }
}