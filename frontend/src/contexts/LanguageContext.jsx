import { createContext, useState, useEffect } from "react";
import { DiPython, DiJava, DiJsBadge, DiCss3, DiHtml5, DiPhp, DiRuby, DiRust, DiSwift } from 'react-icons/di';
import { BiLogoMicrosoft } from "react-icons/bi";
import { SiC, SiCplusplus, SiGo, SiTypescript, SiKotlin, SiR, SiDart, SiPerl } from 'react-icons/si'

const languages = 
{
    python: { name:"Python", icon:<DiPython/>},
    java: {name: "Java", icon: <DiJava/>},
    javaScript: {name: "JavaScript", icon: <DiJsBadge/>},
    C: {name: "C", icon: <SiC/>},
    Cpp: {name: "C++", icon: <SiCplusplus/>},
    Csharp: {name: "C#", icon: <BiLogoMicrosoft/>},
    css: {name: "CSS3", icon: <DiCss3/>},
    html: {name: "HTML5", icon: <DiHtml5/>},
    php: {name: "PHP", icon: <DiPhp/>},
    ruby: {name: "Ruby", icon: <DiRuby/>},
    rust: {name: "Rust", icon: <DiRust/>},
    swift: {name: "Swift", icon: <DiSwift/>},
    go: {name: "Go", icon: <SiGo/>},
    typescript: {name: "TypeScript", icon: <SiTypescript/>},
    kotlin: {name: "Kotlin", icon: <SiKotlin/>},
    R: {name: "R", icon: <SiR/>},
    dart: {name: "Dart", icon: <SiDart/>},
    perl: {name: "Perl", icon: <SiPerl/>}
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