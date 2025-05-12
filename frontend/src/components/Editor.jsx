import React from 'react'

export const Editor = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            {/* <h5 className='text-4xl font-semibold py-5'>Code Editor</h5> */}
            <textarea
                className="bg-gray-900 text-white rounded-lg border-2 h-[65vh] w-3/4 border-gray-300 shadow-md p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Paste your code here..."
            ></textarea>
            
            <div className='flex flex-col md:flex-row justify-around w-3/4'>
                <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-5 hover:bg-blue-600 transition duration-300'>
                    Summarize
                </button>
                <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-5 hover:bg-blue-600 transition duration-300'>
                    Clear
                </button>
                <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-5 hover:bg-blue-600 transition duration-300'>
                    Download
                </button>
                </div>
        </div>
      );
}
