
// The NN API Endpoints that are of use now:
const env = process.env.REACT_APP_ENV;
let baseUrl = null;

if (env === "PROD") {
    baseUrl = process.env.REACT_APP_BASE_API_URL;
} else {
    baseUrl = "http://localhost:5000/";
}

export const datasetsNamesEndpoint = baseUrl + "datasets/names";
export const datasetsInformationEndpoint = baseUrl + "datasets/info/";
export const datasetsEndpoint = baseUrl + "datasets/";
export const architectureEndpoint = baseUrl + "architecture";
export const pcaEndpoint = baseUrl + "pca"
