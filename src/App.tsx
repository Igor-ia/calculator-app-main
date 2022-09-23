import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { CalculatorButton } from "./components/CalculatorButton"
import { ThemeToggle } from "./components/ThemeToggle"

interface ThemeConfigProps {
  bgMain: string;
  bgToggleKeypad: string;
  bgScreen: string;
  bgKey1: string;
  keyShadow1: string;
  bgKey2: string;
  keyShadow2: string;
  bgKey3: string;
  keyShadow3: string;
  textColorMain: string;
  textColorKey?: string;
  textColorCalc?: string;

}

function App() {
  const [themeSelected, setThemeSelected] = useState<string>('1');
  const [display, setDisplay] = useState<string>('');
  const [themeConfig, setThemeConfig] = useState<ThemeConfigProps>({
    bgMain: "#3a4764",
    bgToggleKeypad: "",
    bgScreen: "",
    bgKey1: "",
    keyShadow1: "",
    bgKey2: "",
    keyShadow2: "",
    bgKey3: "",
    keyShadow3: "",
    textColorMain: "",
    textColorKey: "",
    textColorCalc: "",
  });

  function handleChangeRadioTheme(e: ChangeEvent<HTMLInputElement>) {
    setThemeSelected(e.target.value);
  }

  document.body.classList.remove("bg-main-theme-1");
  document.body.classList.remove("bg-main-theme-2");
  document.body.classList.remove("bg-main-theme-3");

  useEffect(() => {

    if (themeSelected === '1') {
      setThemeConfig({
        bgMain: 'bg-main-theme-1',
        bgToggleKeypad: 'bg-toggle-keypad-theme-1',
        bgScreen: 'bg-screen-theme-1',
        bgKey1: 'bg-key-dark-blue',
        keyShadow1: 'bg-key-shadow-dark-blue',
        bgKey2: 'bg-key-red',
        keyShadow2: 'bg-key-shadow-dark-red',
        bgKey3: 'bg-key-grayish-orange',
        keyShadow3: 'bg-key-shadow-grayish-orange',
        textColorMain: 'text-white',
        textColorKey: 'text-grayish-blue',
      })

    } else if (themeSelected === '2') {
      setThemeConfig({
        bgMain: 'bg-main-theme-2',
        bgToggleKeypad: 'bg-toggle-keypad-theme-2',
        bgScreen: 'bg-screen-theme-2',
        bgKey1: 'bg-key-dark-cyan',
        keyShadow1: 'bg-key-shadow-dark-cyan',
        bgKey2: 'bg-key-orange',
        keyShadow2: 'bg-key-shadow-dark-orange',
        bgKey3: 'bg-key-grayish-yellow',
        keyShadow3: 'bg-key-shadow-dark-grayish-orange',
        textColorMain: 'text-dark-grayish-yellow',
      })


    } else if (themeSelected === '3') {
      setThemeConfig({
        bgMain: 'bg-main-theme-3',
        bgToggleKeypad: 'bg-toggle-keypad-theme-3',
        bgScreen: 'bg-screen-theme-3',
        bgKey1: 'bg-key-dark-violet',
        keyShadow1: 'bg-key-shadow-vivid-magenta',
        bgKey2: 'bg-key-pure-cyan',
        keyShadow2: 'bg-key-shadow-soft-cyan',
        bgKey3: 'bg-key-very-dark-violet',
        keyShadow3: 'bg-key-shadow-dark-magenta',
        textColorMain: 'text-light-yellow',
        textColorKey: 'text-light-yellow',
        textColorCalc: 'text-dark-blue',
      })
    }
  }, [themeSelected])


  document.body.classList.add(themeConfig.bgMain);

  function handleClickNumber(e: MouseEvent<HTMLButtonElement>) {
    const el = e.target as HTMLElement;
    setDisplay(display + el.innerText);
  }

  function handleCalculate() {
    try {
      const newDisplay = eval(display);

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
    <section className={`p-8 sm:w-[400px] sm:my-[50px] mx-auto flex flex-col items-center ${themeConfig.textColorMain}`}>
      <div className="w-full flex items-center justify-between">
        <span className="text-3xl sm:text-base">
          calc
        </span>
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm sm:text-[10px]">
            THEME
          </span>
          <div className="flex flex-col">
            <div className="flex gap-3 items-center justify-center text-xs">
              <span>
                1
              </span>
              <span>
                2
              </span>
              <span>
                3
              </span>
            </div>
            <div className={`w-[70px] sm:w-12 h-7 sm:h-4 flex gap-1 rounded-2xl sm:rounded-lg items-center justify-center ${themeConfig.bgToggleKeypad}`}>
              <ThemeToggle
                id="1"
                value="1"
                themeToggle={themeConfig.bgKey2}
                defaultChecked={true}
                onThemeChange={(e) => handleChangeRadioTheme(e)}
              />
              <ThemeToggle
                id="2"
                value="2"
                themeToggle={themeConfig.bgKey2}
                defaultChecked={false}
                onThemeChange={(e) => handleChangeRadioTheme(e)}
              />
              <ThemeToggle
                id="3"
                value="3"
                themeToggle={themeConfig.bgKey2}
                defaultChecked={false}
                onThemeChange={(e) => handleChangeRadioTheme(e)}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-24 my-6 sm:my-4 p-3 flex  items-center justify-end rounded-xl sm:rounded-md ${themeConfig.bgScreen}`}>
        <span className="text-4xl overflow-hidden" id="display">{display}</span>
      </div>


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
          textColor={themeConfig.textColorKey}
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
          textColor={themeConfig.textColorKey}
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
    </section>
  )
}

export default App
