import { MouseEvent } from 'react';

interface CalculatorButtonProps {
    value: string;
    handleNumberButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    handleActionButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    style?: string;
    backgroundColor: string;
    shadowColor: string;
    textColor?: string;
    textStyle?: string;
}

export function CalculatorButton({ value, handleNumberButtonClick, handleActionButtonClick, backgroundColor, textColor, shadowColor, style, textStyle }: CalculatorButtonProps) {
    return (
        <button
            className={`pb-1 ${shadowColor} overflow-hidden self-stretch rounded-md ${style} hover:brightness-150`}
            onClick={handleNumberButtonClick ? handleNumberButtonClick : handleActionButtonClick}
            type="button"
        >
            <div className={`text-3xl ${textColor} py-1 text-center  ${backgroundColor} rounded-b-lg ${textStyle}`}>
                {value}
            </div>
        </button>
    )
}