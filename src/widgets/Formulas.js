import { MathJax, MathJaxContext } from "better-react-mathjax";


let equations = {
    0: "`a_1=w_11^1*x_1+w_12^1*x_2`",
    1: "`a_2=w_21^1*x_1+w_22^1*x_2`",
    2: "`o_1=w_11^2*a_1+w_12^2*a_2`",
    3: "`o_2=w_21^2*a_1+w_22^2*a_2`",
}

export function EquationGenerator({ tutorialStep }) {
    const config = {
        loader: { load: ["input/asciimath"] }
    };

    return (
        <MathJaxContext config={config}>
            <MathJax dynamic>{equations[tutorialStep]}</MathJax>
        </MathJaxContext>
    );
}

export function GeneralEquationGenerator({ tutorialStep }) {
    const config = {
        loader: { load: ["input/asciimath"] }
    };

    return (
        <MathJaxContext config={config}>
            <MathJax dynamic>{equations[tutorialStep]}</MathJax>
        </MathJaxContext>
    );
}