import { MathJax, MathJaxContext } from "better-react-mathjax";


const equations = {
    0: "`z_(a1)=sigma(a_1)=sigma(w_11^1*x_1+w_12^1*x_2)`",
    1: "`z_(a2)=sigma(a_2)=sigma(w_21^1*x_1+w_22^1*x_2)`",
    2: "`z_(o1)=sigma(o_1)=sigma(w_11^2*a_1+w_12^2*a_2)`",
    3: "`z_(o2)=sigma(o_2)=sigma(w_21^2*a_1+w_22^2*a_2)`",
    4: "`L=1/2((y_1-z_(o1))^2 + (y_2-z_(o2))^2)`",
}

const generalEquations = {
    0: "`sigma([[w_11^1,w_12^1],[-,-]][[x_1],[x_2]])=sigma([[a_1],[-]])=bb{Z}^1`",
    1: "`sigma([[-,-],[w_21^1,w_22^1]][[x_1],[x_2]])=sigma([[-],[a_2]])=bb{Z}^1`",
    2: "`sigma([[w_11^2,w_12^2],[-,-]][[a_1],[a_2]])=sigma([[o_1],[-]])=bb{Z}^2`",
    3: "`sigma([[-,-],[w_21^2,w_22^2]][[a_1],[a_2]])=sigma([[-],[o_2]])=bb{Z}^2`",
    4: "`L=1/nsum_(i=0)^n(y_i - z_i)^2`",
}

const equationTitles = {
    0: "Activations Of The Hidden Layer",
    1: "Activations Of The Hidden Layer",
    2: "Activations Of The Output Layer",
    3: "Activations Of The Output Layer",
    4: "Choose a Loss Function"
}

const genEquationTitles = {
    0: "Matrix Equivalent",
    1: "Matrix Equivalent",
    2: "Matrix Equivalent",
    3: "Matrix Equivalent",
    4: "General Equation"
}


export function EquationGenerator({ tutorialStep }) {
    const config = {
        loader: { load: ["input/asciimath"] }
    };

    return (
        <>
            <h1 className="mainText">{equationTitles[tutorialStep]}</h1>
            <MathJaxContext config={config}>
                <MathJax dynamic>{equations[tutorialStep]}</MathJax>
            </MathJaxContext>
        </>
    );
}


export function GeneralEquationGenerator({ tutorialStep }) {
    const config = {
        loader: { load: ["input/asciimath"] }
    };

    return (
        <>
            <h1 className="mainText">{genEquationTitles[tutorialStep]}</h1>
            <MathJaxContext config={config}>
                <MathJax dynamic>{generalEquations[tutorialStep]}</MathJax>
            </MathJaxContext>
        </>
    );
}