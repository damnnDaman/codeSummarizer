const LanguagePickerOption = ({ children, ...otherProps }) => {
    return (
        <div className="text-white cursor-pointer flex hover:bg-gray-400 rounded-lg" {...otherProps} >
            <div className="flex items-center gap-2 px-2">
                {children.name} {children.icon}
            </div>
        </div>
    )
}

export default LanguagePickerOption;