import { MouseEvent } from "react";
import { CalculatorButton } from "./CalculatorButton";

import { ThemeConfigProps } from "../App";

interface Props {
    themeConfig: ThemeConfigProps;
    display: string;
    setDisplay: (value: string) => void;
}

export function Keypad({ themeConfig, display, setDisplay }: Props) {

    function handleClickNumber(e: MouseEvent<HTMLButtonElement>) {
        const el = e.target as HTMLElement;
        setDisplay(display + el.innerText);
    }

    function handleCalculate() {
        try {
            const newDisplay = eval(display.replace(/x/g, '*'));

            if (!newDisplay) {
                setDisplay('ERROR');
                return;
            }

            setDisplay(newDisplay);

        } catch (error) {
            setDisplay("ERROR");
        }
    }

    function handleClickDelete() {
        const newDisplay = display.slice(0, -1);
        setDisplay(newDisplay);
    }

    function handleClickReset() {
        setDisplay('');
    }

    return (
        <div className={`w-full p-5 gap-2 sm:gap-4 auto-cols-auto grid grid-cols-4 grid-flow-dense rounded-xl sm:rounded-md ${themeConfig.bgToggleKeypad}`}>
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="7"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="8"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="9"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey1}
                textColor='text-white'
                shadowColor={themeConfig.keyShadow1}
                handleActionButtonClick={handleClickDelete}
                value="DEL"
                textStyle="text-xl text-white py-2 h-full"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="4"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="5"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="6"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleActionButtonClick={handleClickNumber}
                value="+"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="1"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="2"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="3"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="-"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="."
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="0"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="/"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey3}
                textColor={themeConfig.textColorKey}
                shadowColor={themeConfig.keyShadow3}
                handleNumberButtonClick={handleClickNumber}
                value="x"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey1}
                textColor='text-white'
                shadowColor={themeConfig.keyShadow1}
                handleActionButtonClick={handleClickReset}
                value="RESET"
                textStyle="text-xl py-4 sm:py-2 text-white h-full"
                style="col-span-2"
            />
            <CalculatorButton
                backgroundColor={themeConfig.bgKey2}
                textColor={themeConfig.textColorCalc ? themeConfig.textColorCalc : 'text-white'}
                shadowColor={themeConfig.keyShadow2}
                handleActionButtonClick={handleCalculate}
                value="="
                textStyle="h-full py-3 sm:py-2"
                style="col-span-2"
            />

        </div>
    )
}