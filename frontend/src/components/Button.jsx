const Button = ({ children, ...otherProps }) => {
    return (
        <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-5 hover:bg-blue-600 transition duration-300 md:w-7/24 md:mb-5 2xl:text-3xl  xl:py-3 2xl:py-5 3xl:text-4xl ' {...otherProps}>{children}</button>
    )
}

export default Button;