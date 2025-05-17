const LanguagePickerOption = ({children, ...otherProps}) => 
{
    return (
        <div className="text-white" {...otherProps} > {children} </div>
    )
}

export default LanguagePickerOption;