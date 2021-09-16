
// The NN API Endpoints that are of use now:
const baseUrl = process.env.REACT_APP_BASE_API_URL;

if (typeof baseUrl !== 'undefined') {
    baseUrl = "http://localhost:5000/";
}

export const datasetsNamesEndpoint = baseUrl + "datasets/names";
export const datasetsInformationEndpoint = baseUrl + "datasets/info/";
export const datasetsEndpoint = baseUrl + "datasets/";
export const architectureEndpoint = baseUrl + "architecture";
export const pcaEndpoint = baseUrl + "pca"
