import React from 'react'

import Button from './Button.jsx'

export const Editor = () => {
    return (
        <div className='flex flex-col items-center justify-center my-2%'>
            {/* <h5 className='text-4xl font-semibold py-5'>Code Editor</h5> */}
            <textarea
                className="bg-gray-900 text-white rounded-lg border-2 h-[65vh] w-3/4 border-gray-300 shadow-md p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Paste your code here..."
            ></textarea>

            <div className='flex flex-col md:flex-row justify-around w-3/4'>
                <Button onClick={() => {console.log("test")}}>Summarize </Button>
                <Button>Clear </Button>
                <Button>Download </Button>
            </div>
        </div>
    );
}
