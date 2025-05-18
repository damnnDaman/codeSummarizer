import { useState, useContext } from "react";
import LanguagePickerOption from "./LanguagePickerOption"

import { LanguageContext } from "../contexts/LanguageContext";

const LanguagePicker = () => {
    const { languages, curLanguage, setCurLanguage } = useContext(LanguageContext);
    const [dropdown, setDropdown] = useState(false);

    const flipDropdown = () => {
        setDropdown(!dropdown)
    }

    const selectNewLanguage = (language) => {
        setDropdown(false);
        setCurLanguage(language);
    }

    return (
        <div className="rounded-lg max-w-3/3 flex flex-col gap-1 items-center justify-between relative border-2 border-gray-300 shadow-md w-max left-[12.5vw]">

            <button className="text-white cursor-pointer bg-gray-700 hover:bg-gray-400 p-1 rounded-lg " onClick={flipDropdown}>
                <span className="flex items-center gap-2">Current language: {curLanguage.name} {curLanguage.icon} {dropdown ? '▲' : '▼'}</span>
            </button>

            <div className="absolute my-11 bg-gray-700 rounded-lg w-full">
                {dropdown && Object.entries(languages).map(([key, language]) => (
                    <LanguagePickerOption key={key} onClick={() => selectNewLanguage(language)}>{language}</LanguagePickerOption>
                ))}
            </div>
        </div>
    )
}

export default LanguagePicker;