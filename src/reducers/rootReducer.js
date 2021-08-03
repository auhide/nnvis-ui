const UPDATE_LAYERS = "UPDATE_LAYERS";
const UPDATE_HPARAMS = "UPDATE_HPARAMS"
const UPDATE_RESULT = "UPDATE_RESULT";
const IS_EVALUATING = "IS_EVALUATING";
const UPDATE_DATASET = "UPDATE_DATASET";
const UPDATE_N_FEATURES = "UPDATE_N_FEATURES";
const UPDATE_N_LABELS = "UPDATE_N_LABELS";
const UPDATE_FEATURE_NAMES = "UPDATE_FEATURE_NAMES"
const UPDATE_FEATURES_MAP = "UPDATE_FEATURES_MAP";
const UPDATE_TOP_N = "UPDATE_TOP_N";
const UPDATE_FEATURES_SIGNIFICANCE = "UPDATE_FEATURES_SIGNIFICANCE";
const UPDATE_PCA = "UPDATE_PCA";


// A Global State used for the Neural Network Visualization
const initialState = {
    architecture: {
        1: 2,
        2: 3,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    },
    params: {
        optimization: "sgd",
        hyperparameters: {
            epochs: 1,
            learning_rate: 0.1,
            activation: "sigm",
            batch: 5,
            random: 0,
            momentum: 0.1,
            epsilon: 0.01,
            beta1: 0.9,
            beta2: 0.999
        }
    },
    
    dataset: "gender_voice",
    features: null,
    featureNames: "all",
    featuresMap: {},
    topN: 2,
    featuresSignificance: {},

    labels: 2,
    evaluationResult: {},
    isEvaluating: null,

    pca: false
};


export default function rootReducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_LAYERS:
            state.architecture = { ...action.architecture };
            return state;
        
        case UPDATE_HPARAMS:
            state.params = { ...action.params };
            return state;

        case UPDATE_RESULT:
            state.evaluationResult = { ...action.result };
            return state;
        
        case IS_EVALUATING:
            state.isEvaluating = action.isEvaluating;
            return state;

        case UPDATE_DATASET:
            state.dataset = action.dataset;
            return state;

        case UPDATE_N_FEATURES:
            state.features = action.features;
            return state;

        case UPDATE_N_LABELS:
            state.labels = action.labels;
            return state;

        case UPDATE_FEATURE_NAMES:
            state.featureNames = action.featureNames;
            return state;

        case UPDATE_FEATURES_MAP:
            state.featuresMap = { ...action.featuresMap };
            return state;

        case UPDATE_TOP_N:
            state.topN = action.topN;
            return state;

        case UPDATE_FEATURES_SIGNIFICANCE:
            state.featuresSignificance = { ...action.featuresSignificance };
            return state;

        case UPDATE_PCA:
            state.pca = action.pca;
            return state;

        default:
            return state;
    }
}