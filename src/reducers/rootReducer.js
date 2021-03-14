const UPDATE_LAYERS = "UPDATE_LAYERS";
const UPDATE_HPARAMS = "UPDATE_HPARAMS"
const UPDATE_RESULT = "UPDATE_RESULT";
const IS_EVALUATING = "IS_EVALUATING";


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
    evaluationResult: {},
    isEvaluating: null,

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

        default:
            return state;
    }
}