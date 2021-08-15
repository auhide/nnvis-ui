import { MathJax, MathJaxContext } from "better-react-mathjax";


const equations = {
    0: "`z_(a1)=sigma(a_1)=sigma(w_11^1*x_1+w_12^1*x_2)`",
    1: "`z_(a2)=sigma(a_2)=sigma(w_21^1*x_1+w_22^1*x_2)`",
    2: "`z_(o1)=sigma(o_1)=sigma(w_11^2*a_1+w_12^2*a_2)`",
    3: "`z_(o2)=sigma(o_2)=sigma(w_21^2*a_1+w_22^2*a_2)`",
}

const generalEquations = {
    0: "`sigma([[w_11^1,w_12^1],[-,-]][[x_1],[x_2]])=sigma([[a_1],[-]])=bb{Z}^1`",
    1: "`sigma([[-,-],[w_21^1,w_22^1]][[x_1],[x_2]])=sigma([[-],[a_2]])=bb{Z}^1`",
    2: "`sigma([[w_11^2,w_12^2],[-,-]][[a_1],[a_2]])=sigma([[o_1],[-]])=bb{Z}^2`",
    3: "`sigma([[-,-],[w_21^2,w_22^2]][[a_1],[a_2]])=sigma([[-],[o_2]])=bb{Z}^2`",
}

export function EquationGenerator({ tutorialStep }) {
    const config = {
        loader: { load: ["input/asciimath"] }
    };

    return (
        <>
            <h1 className="mainText">Standard Equation</h1>
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
            <h1 className="mainText">Matrix Equation</h1>
            <MathJaxContext config={config}>
                <MathJax dynamic>{generalEquations[tutorialStep]}</MathJax>
            </MathJaxContext>
        </>
    );
}