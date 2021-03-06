/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CountDown {
        "fromSeconds": number;
    }
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
    interface WateringCan {
        "water": (flower: string) => Promise<void>;
        "wcTop": string;
    }
}
declare global {
    interface HTMLCountDownElement extends Components.CountDown, HTMLStencilElement {
    }
    var HTMLCountDownElement: {
        prototype: HTMLCountDownElement;
        new (): HTMLCountDownElement;
    };
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
    interface HTMLWateringCanElement extends Components.WateringCan, HTMLStencilElement {
    }
    var HTMLWateringCanElement: {
        prototype: HTMLWateringCanElement;
        new (): HTMLWateringCanElement;
    };
    interface HTMLElementTagNameMap {
        "count-down": HTMLCountDownElement;
        "es-game": HTMLEsGameElement;
        "growing-flower": HTMLGrowingFlowerElement;
        "math-problem": HTMLMathProblemElement;
        "watering-can": HTMLWateringCanElement;
    }
}
declare namespace LocalJSX {
    interface CountDown {
        "fromSeconds"?: number;
        "onOutOfTime"?: (event: CustomEvent<string>) => void;
    }
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
    interface WateringCan {
        "wcTop"?: string;
    }
    interface IntrinsicElements {
        "count-down": CountDown;
        "es-game": EsGame;
        "growing-flower": GrowingFlower;
        "math-problem": MathProblem;
        "watering-can": WateringCan;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "count-down": LocalJSX.CountDown & JSXBase.HTMLAttributes<HTMLCountDownElement>;
            "es-game": LocalJSX.EsGame & JSXBase.HTMLAttributes<HTMLEsGameElement>;
            "growing-flower": LocalJSX.GrowingFlower & JSXBase.HTMLAttributes<HTMLGrowingFlowerElement>;
            "math-problem": LocalJSX.MathProblem & JSXBase.HTMLAttributes<HTMLMathProblemElement>;
            "watering-can": LocalJSX.WateringCan & JSXBase.HTMLAttributes<HTMLWateringCanElement>;
        }
    }
}
