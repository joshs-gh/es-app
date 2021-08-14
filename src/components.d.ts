/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface EsGame {
    }
    interface GrowingFlower {
        "grow": string;
        "left": string;
        "top": string;
    }
    interface MathProblem {
        "numRange": number;
        "won": boolean;
    }
}
declare global {
    interface HTMLEsGameElement extends Components.EsGame, HTMLStencilElement {
    }
    var HTMLEsGameElement: {
        prototype: HTMLEsGameElement;
        new (): HTMLEsGameElement;
    };
    interface HTMLGrowingFlowerElement extends Components.GrowingFlower, HTMLStencilElement {
    }
    var HTMLGrowingFlowerElement: {
        prototype: HTMLGrowingFlowerElement;
        new (): HTMLGrowingFlowerElement;
    };
    interface HTMLMathProblemElement extends Components.MathProblem, HTMLStencilElement {
    }
    var HTMLMathProblemElement: {
        prototype: HTMLMathProblemElement;
        new (): HTMLMathProblemElement;
    };
    interface HTMLElementTagNameMap {
        "es-game": HTMLEsGameElement;
        "growing-flower": HTMLGrowingFlowerElement;
        "math-problem": HTMLMathProblemElement;
    }
}
declare namespace LocalJSX {
    interface EsGame {
    }
    interface GrowingFlower {
        "grow"?: string;
        "left"?: string;
        "top"?: string;
    }
    interface MathProblem {
        "numRange"?: number;
        "onGotItRight"?: (event: CustomEvent<String>) => void;
        "won"?: boolean;
    }
    interface IntrinsicElements {
        "es-game": EsGame;
        "growing-flower": GrowingFlower;
        "math-problem": MathProblem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "es-game": LocalJSX.EsGame & JSXBase.HTMLAttributes<HTMLEsGameElement>;
            "growing-flower": LocalJSX.GrowingFlower & JSXBase.HTMLAttributes<HTMLGrowingFlowerElement>;
            "math-problem": LocalJSX.MathProblem & JSXBase.HTMLAttributes<HTMLMathProblemElement>;
        }
    }
}
