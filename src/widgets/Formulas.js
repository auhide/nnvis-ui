import { MathJax, MathJaxContext } from "better-react-mathjax";


const equations = {
    0: ["`a_1=sigma(z_(a1)) = sigma(w_11^1*x_1+w_12^1*x_2)`"],
    1: ["`a_2=sigma(z_(a2)) = sigma(w_21^1*x_1+w_22^1*x_2)`"],
    2: ["`o_1=sigma(z_(o1)) = sigma(w_11^2*a_1+w_12^2*a_2)`"],
    3: ["`o_2=sigma(z_(o2)) = sigma(w_21^2*a_1+w_22^2*a_2)`"],
    4: ["`L=1/2((y_1-z_(o1))^2 + (y_2-z_(o2))^2)`"],
    5: [
        "`w_(11)^(2) = w_(11)^(2) - eta(delC)/(delw_(11)^(2))`", 
        "`(delC)/(delw_(11)^(2))=a_1delta_(w11)^(2)  \\ =>\\ \\ \\delta_(w11)^(2) = z_(a1)(1-z_(a1))(o_1-y_1)`"
    ],
    6: [
        "`w_(12)^(2) = w_(12)^(2) - eta(delC)/(delw_(12)^(2))`", 
        "`(delC)/(delw_(12)^(2))=a_2delta_(w12)^(2)  \\ =>\\ \\ \\delta_(w12)^(2) = z_(a2)(1-z_(a2))(o_1-y_1)`"
    ],
    7: [
        "`w_(21)^(2) = w_(21)^(2) - eta(delC)/(delw_(21)^(2))`", 
        "`(delC)/(delw_(21)^(2))=a_1delta_(w21)^(2)  \\ =>\\ \\ \\delta_(w21)^(2) = z_(a1)(1-z_(a1))(o_2-y_2)`"
    ],
    8: [
        "`w_(22)^(2) = w_(22)^(2) - eta(delC)/(delw_(22)^(2))`", 
        "`(delC)/(delw_(22)^(2))=a_2delta_(w22)^(2)  \\ =>\\ \\ \\delta_(w22)^(2) = z_(a2)(1-z_(a2))(o_2-y_2)`"
    ]
}

const generalEquations = {
    0: ["`sigma([[w_11^1,w_12^1],[-,-]][[x_1],[x_2]])=sigma([[a_1],[-]])=bb{A}^1`"],
    1: ["`sigma([[-,-],[w_21^1,w_22^1]][[x_1],[x_2]])=sigma([[-],[a_2]])=bb{A}^1`"],
    2: ["`sigma([[w_11^2,w_12^2],[-,-]][[a_1],[a_2]])=sigma([[o_1],[-]])=bb{A}^2`"],
    3: ["`sigma([[-,-],[w_21^2,w_22^2]][[a_1],[a_2]])=sigma([[-],[o_2]])=bb{A}^2`"],
    4: ["`L=1/nsum_(i=0)^n(y_i - z_i)^2`"],
    5: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
    6: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
    7: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
    8: ["`w_(ji) = w_(ji) - eta grad_w C=w_(ji) - eta (delC)/(delw_(ji))`"],
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