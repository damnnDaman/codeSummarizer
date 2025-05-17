import { createContext, useState, useEffect } from "react";
import { DiPython, DiJava, DiJavascript } from 'react-icons/di';
import { FaCode } from "react-icons/fa";
import { BiLogoMicrosoft } from "react-icons/bi";

const languages = 
{
    python: { name:"Python", icon:<DiPython/>},
    java: {name: "Java", icon: <DiJava/>},
    javaScript: {name: "JavaScript", icon: <DiJavascript/>},
    C: {name: "C", icon: <FaCode/>},
    Csharp: {name: "C#", icon: <BiLogoMicrosoft/>}
};

export const LanguageContext = createContext
({
    languages: languages,
    curLanguage: languages.python,
    setCurLanguage: () => {}
});

export const LanguageProvider = ({ children }) => 
{
    const [curLanguage, setCurLanguage] = useState(languages.python);

    const value = { languages, curLanguage, setCurLanguage };

    return <LanguageContext.Provider value={value}> {children } </LanguageContext.Provider>
}