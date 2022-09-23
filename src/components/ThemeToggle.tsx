import { ChangeEvent, MouseEvent } from 'react'

interface ThemeToggleProps {
    id: string;
    defaultChecked: boolean;
    value: string;
    themeToggle: string;
    onThemeChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function ThemeToggle({ id, value, themeToggle, defaultChecked, onThemeChange }: ThemeToggleProps) {
    return (
        <label htmlFor={id} >
            <input className="hidden" type="radio" id={id} name="theme-radio" value={value} onChange={onThemeChange} defaultChecked={defaultChecked} />
            <div className={`w-4 sm:w-3 h-4 sm:h-3 rounded-full cursor-pointer opacity-0 label-checked:opacity-100 ${themeToggle}`}></div>
        </label>
    )
}