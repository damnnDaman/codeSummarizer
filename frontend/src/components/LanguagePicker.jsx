import LanguagePickerOption from "./LanguagePickerOption"

const LanguagePicker = () => 
{
    const languages = ["java", "python", "javascript"];

    return (
        <div className="language-dropdown-container">
            {(languages.map((language) => <LanguagePickerOption key={language.id}>language</LanguagePickerOption>))}
        </div>
    )
}

export default LanguagePicker;