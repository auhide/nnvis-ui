import { MathJax, MathJaxContext } from "better-react-mathjax";


const equations = {
    0: ["`a_1=sigma(z_(a1)) = sigma(w_11^1*x_1+w_12^1*x_2)`"],
    1: ["`a_2=sigma(z_(a2)) = sigma(w_21^1*x_1+w_22^1*x_2)`"],
    2: ["`o_1=sigma(z_(o1)) = sigma(w_11^2*a_1+w_12^2*a_2)`"],
    3: ["`o_2=sigma(z_(o2)) = sigma(w_21^2*a_1+w_22^2*a_2)`"],
    4: ["`C=1/2((y_1-o_1)^2 + (y_2-o_2)^2)`"],
    // Output weights - w_11
    5: [
        "`w_(11)^(2) = w_(11)^(2) - eta(delC)/(delw_(11)^(2))`", 
        "`(delC)/(delw_(11)^(2))=a_1delta_(o_1)  \\ =>\\ \\ \\delta_(o_1) = (delo_1)/(delz_(o1)) (delC)/(delo_1) = z_(a1)(1-z_(a1))(o_1-y_1)`"
    ],
    // Output weights - w_12
    6: [
        "`w_(12)^(2) = w_(12)^(2) - eta(delC)/(delw_(12)^(2))`", 
        "`(delC)/(delw_(12)^(2))=a_2delta_(o_1)  \\ =>\\ \\ \\delta_(o_1) = (delo_1)/(delz_(o1)) (delC)/(delo_1) =z_(a2)(1-z_(a2))(o_1-y_1)`"
    ],
    // Output weights - w_21
    7: [
        "`w_(21)^(2) = w_(21)^(2) - eta(delC)/(delw_(21)^(2))`", 
        "`(delC)/(delw_(21)^(2))=a_1delta_(o_2)  \\ =>\\ \\ \\delta_(o_2) = (delo_2)/(delz_(o2)) (delC)/(delo_2) = z_(a1)(1-z_(a1))(o_2-y_2)`"
    ],
    // Output weights - w_22
    8: [
        "`w_(22)^(2) = w_(22)^(2) - eta(delC)/(delw_(22)^(2))`", 
        "`(delC)/(delw_(22)^(2))=a_2delta_(o_2)  \\ =>\\ \\ \\delta_(o_2) = (delo_2)/(delz_(o2)) (delC)/(delo_2) = z_(a2)(1-z_(a2))(o_2-y_2)`"
    ],
    // Hidden weights - w_11
    9: [
        "`w_(11)^(1) = w_(11)^(1) - eta(delC)/(delw_(11)^(1))`", 
        "`(delC)/(delw_(11)^(1))=x_1 (dela_1)/(delz_(a1)) delta_(a_1)  \\ =>\\ \\ \\delta_(a_1) = w_(11)^2delta_(o_1) + w_(21)^2delta_(o_2)`"
    ],
    // Hidden weights - w_12
    10: [
        "`w_(12)^(1) = w_(12)^(1) - eta(delC)/(delw_(12)^(1))`", 
        "`(delC)/(delw_(12)^(1))=x_2 (dela_1)/(delz_(a1)) delta_(a_1)  \\ =>\\ \\ \\delta_(a_1) = w_(11)^2delta_(o_1) + w_(21)^2delta_(o_2)`"
    ],
    // Hidden weights - w_21
    11: [
        "`w_(21)^(1) = w_(21)^(1) - eta(delC)/(delw_(21)^(1))`", 
        "`(delC)/(delw_(21)^(1))=x_1 (dela_2)/(delz_(a2)) delta_(a_2)  \\ =>\\ \\ \\delta_(a_2) = w_(12)^2delta_(o_1) + w_(22)^2delta_(o_2)`"
    ],
    // Hidden weights - w_22
    12: [
        "`w_(22)^(1) = w_(22)^(1) - eta(delC)/(delw_(22)^(1))`", 
        "`(delC)/(delw_(22)^(1))=x_2 (dela_2)/(delz_(a2)) delta_(a_2)  \\ =>\\ \\ \\delta_(a_2) = w_(12)^2delta_(o_1) + w_(22)^2delta_(o_2)`"
    ]
}

const generalEquations = {
    0: ["`sigma([[w_11^1,w_12^1],[-,-]][[x_1],[x_2]])=sigma([[a_1],[-]])=bb{a}^1`"],
    1: ["`sigma([[-,-],[w_21^1,w_22^1]][[x_1],[x_2]])=sigma([[-],[a_2]])=bb{a}^1`"],
    2: ["`sigma([[w_11^2,w_12^2],[-,-]][[a_1],[a_2]])=sigma([[o_1],[-]])=bb{a}^2`"],
    3: ["`sigma([[-,-],[w_21^2,w_22^2]][[a_1],[a_2]])=sigma([[-],[o_2]])=bb{a}^2`"],
    4: ["`C=1/nsum_(i=0)^n(y_i - o_i)^2`"],
    5: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
    6: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
    7: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
    8: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
    9: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
    10: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
    11: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
    12: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
}

const equationTitles = {
    0: "Activations Of The Hidden Layer",
    1: "Activations Of The Hidden Layer",
    2: "Activations Of The Output Layer",
    3: "Activations Of The Output Layer",
    4: "Choose a Loss Function",
    5: "Updating Output Weights",
    6: "Updating Output Weights",
    7: "Updating Output Weights",
    8: "Updating Output Weights",
    9: "Updating Hidden Weights",
    10: "Updating Hidden Weights",
    11: "Updating Hidden Weights",
    12: "Updating Hidden Weights",
}

const genEquationTitles = {
    0: "Matrix Equivalent",
    1: "Matrix Equivalent",
    2: "Matrix Equivalent",
    3: "Matrix Equivalent",
    4: "General Equation",
    5: "General Gradient Descent Formula",
    6: "General Gradient Descent Formula",
    7: "General Gradient Descent Formula",
    8: "General Gradient Descent Formula",
    9: "General Gradient Descent Formula",
    10: "General Gradient Descent Formula",
    11: "General Gradient Descent Formula",
    12: "General Gradient Descent Formula",
}

const notationsObject = {
    0: [
        "`a_i` - activation of a hidden neuron", 
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`x_i` - feature `i`",
        "`sigma(x)` - the sigmoid function",
        "`bb{a}^l` - vector of the hidden layer activations"
    ],
    1: [
        "`a_i` - activation of a hidden neuron", 
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`x_i` - feature `i`",
        "`sigma(x)` - the sigmoid function",
        "`bb{a}^l` - vector of the hidden layer activations"
    ],
    2: [
        "`o_i` - activation `i` in the output layer", 
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`a_i` - activation `i` in the hidden layer",
        "`sigma(x)` - the sigmoid function",
        "`bb{a}^l` - vector of the hidden layer activations"
    ],
    3: [
        "`o_i` - activation `i` in the output layer", 
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`a_i` - activation `i` in the hidden layer",
        "`sigma(x)` - the sigmoid function",
        "`bb{a}^l` - vector of the hidden layer activations"
    ],
    4: [
        "`C` - cost function", 
        "`y_i` - expected value for `o_1`",
        "`o_i` - output neuron `i` (predicted value)",
    ],
    5: [
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`eta` - learning rate",
        "`o_i` - output neuron `i` predicted value",
        "`z_(a_i)` - neuron value, before activation",
        "`a_i` - activation of neuron `i`"
    ],
    6: [
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`eta` - learning rate",
        "`o_i` - output neuron `i` predicted value",
        "`z_(a_i)` - neuron value, before activation",
        "`a_i` - activation of neuron `i`"
    ],
    7: [
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`eta` - learning rate",
        "`o_i` - output neuron `i` predicted value",
        "`z_(a_i)` - neuron value, before activation",
        "`a_i` - activation of neuron `i`"
    ],
    8: [
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`eta` - learning rate",
        "`o_i` - output neuron `i` predicted value",
        "`z_(a_i)` - neuron value, before activation",
        "`a_i` - activation of neuron `i`"
    ],
    9: [
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`eta` - learning rate",
        "`x_i` - feature `i`",
        "`z_(a_i)` - neuron value, before activation `i`",
        "`delta_(k_i)` - error propagated from node `k_i`"
    ],
    10: [
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`eta` - learning rate",
        "`x_i` - feature `i`",
        "`z_(a_i)` - neuron value, before activation `i`",
        "`delta_(k_i)` - error propagated from node `k_i`"
    ],
    11: [
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`eta` - learning rate",
        "`x_i` - feature `i`",
        "`z_(a_i)` - neuron value, before activation `i`",
        "`delta_(k_i)` - error propagated from node `k_i`"
    ],
    12: [
        "`w_(ji)^l`- weight at layer `l` from neuron `i` to neuron `j`",
        "`eta` - learning rate",
        "`x_i` - feature `i`",
        "`z_(a_i)` - neuron value, before activation `i`",
        "`delta_(k_i)` - error propagated from node `k_i`"
    ],
}


export function EquationGenerator({ tutorialStep }) {
    const config = {
        loader: { load: ["input/asciimath"] }
    };

    let mathjaxEquations = [];
    
    equations[tutorialStep].forEach(element => {
        mathjaxEquations.push(<MathJax dynamic>{element}</MathJax>)
    });

    return (
        <>
            <h1 className="mainText">{equationTitles[tutorialStep]}</h1>
            <MathJaxContext config={config}>
                {mathjaxEquations}
            </MathJaxContext>
        </>
    );
}


export function GeneralEquationGenerator({ tutorialStep }) {
    const config = {
        loader: { load: ["input/asciimath"] }
    };

    let mathjaxEquations = [];
    
    generalEquations[tutorialStep].forEach(element => {
        mathjaxEquations.push(<MathJax dynamic>{element}</MathJax>)
    });

    return (
        <>
            <h1 className="mainText">{genEquationTitles[tutorialStep]}</h1>
            <MathJaxContext config={config}>
                {mathjaxEquations}
            </MathJaxContext>
        </>
    );
}

export function NotationsGenerator({ tutorialStep }) {
    const config = {
        loader: { load: ["input/asciimath"] }
    };

    let mathjaxEquations = [];
    
    notationsObject[tutorialStep].forEach(element => {
        mathjaxEquations.push(<MathJax dynamic>{element}</MathJax>)
    });

    return (
        <>
            <h1 className="mainText">Notation</h1>
            <MathJaxContext config={config}>
                {mathjaxEquations}
            </MathJaxContext>
        </>
    );
}
