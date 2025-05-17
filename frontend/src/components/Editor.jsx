import React, { useState, useContext } from 'react';
import Button from './Button.jsx';

import { LanguageContext } from '../contexts/LanguageContext.jsx';

export const Editor = () => {
    const [code, setCode] = useState('');
    const [explanation, setExplanation] = useState('');
    const [loading, setLoading] = useState(false);

    const { curLanguage } = useContext(LanguageContext);

    const handleSummarize = async () => {
        setLoading(true);
        setExplanation('');

        console.log('Code to be sent:', code);
        
        // Send the code to the backend for explanation
        try 
        {
            const response = await fetch('http://localhost:5000/api/explain', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code, language: curLanguage }),
            });

            const data = await response.json();
            console.log(data);

            setExplanation(data.explanation || 'No explanation received.');

        } catch (error) 
        {
            console.error('Error fetching explanation:', error);
            setExplanation('Error fetching explanation. Please try again.');
        }
        
        setLoading(false);
    };

    const handleClear = () => {
        setCode('');
        setExplanation('');
    };

    return (
        <div className='flex flex-col items-center justify-center my-2'>
            <textarea
                className="bg-gray-900 text-white rounded-lg border-2 h-[65vh] w-3/4 border-gray-300 shadow-md p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Paste your code here..."
                value={code}
                onChange={e => setCode(e.target.value)}
            ></textarea>

            <div className='flex flex-col md:flex-row justify-around w-3/4 mt-4'>
                <Button onClick={handleSummarize} disabled={loading || !code}>
                    {loading ? 'Summarizing...' : 'Summarize'}
                </Button>
                <Button onClick={handleClear}>Clear</Button>
                {/* Download button can be implemented as needed */}
            </div>

            {explanation && (
                <div className="bg-white text-black rounded-lg border mt-6 p-4 w-3/4 shadow">
                    <h3 className="font-bold mb-2">Explanation:</h3>
                    <pre className="whitespace-pre-wrap">{explanation}</pre>
                </div>
            )}
        </div>
    );
};