import { useState, useContext } from "react";
import LanguagePickerOption from "./LanguagePickerOption"

import { LanguageContext } from "../contexts/LanguageContext";

const LanguagePicker = () => 
{
    const { languages, curLanguage, setCurLanguage } = useContext(LanguageContext);
    const [dropdown, setDropdown] = useState(false);

    const flipDropdown = () => 
    {
        setDropdown(!dropdown)
    }

    const selectNewLanguage = (language) => 
    {
        setDropdown(false);
        setCurLanguage(language);
    }

    return (
        <div className="border-white rounded-lg ml-5">
            
            <button className="text-white cursor-pointer bg-gray-700 hover:bg-gray-400" onClick={flipDropdown}>
                <span className="flex items-center gap-1">Current language: {curLanguage.name} {curLanguage.icon} {dropdown ? '▲' : '▼'}</span>
            </button>

            {dropdown && Object.entries(languages).map(([key, language]) => (
                <LanguagePickerOption key={key} onClick={() => selectNewLanguage(language)}>{language}</LanguagePickerOption>
            ))}
        </div>
    )
}

export default LanguagePicker;