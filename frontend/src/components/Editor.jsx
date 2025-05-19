import React, { useState, useContext } from 'react';
import Button from './Button.jsx';
import ReactMarkdown from 'react-markdown';

import { LanguageContext } from '../contexts/LanguageContext.jsx';

export const Editor = () => {
    const [code, setCode] = useState('');
    const [explanation, setExplanation] = useState('');
    const [loading, setLoading] = useState(false);
    const [copyText, setCopyText] = useState('Copy');

    const { curLanguage } = useContext(LanguageContext);

    const handleSummarize = async () => {
        setLoading(true);
        setExplanation('');
        setCopyText('Copy');

        console.log('Code to be sent:', code);

        // Send the code to the backend for explanation
        try {
            const response = await fetch('http://localhost:5000/api/explain', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code, language: curLanguage }),
            });

            const data = await response.json();
            console.log(data);

            setExplanation(data.explanation || 'No explanation received.');

        } catch (error) {
            console.error('Error fetching explanation:', error);
            setExplanation('Error fetching explanation. Please try again.');
        }

        setLoading(false);
    };

    const handleClear = () => 
    {
        setCode('');
        setExplanation('');
    };

    const handleCopy = () => 
    {
        navigator.clipboard.writeText(explanation)
            .then(() => setCopyText('Copied'))
            .catch(err => console.error('Failed to copy: ', err));
    }

    return (
        <div className='flex flex-col items-center justify-center my-2'>
            <textarea
                className="font-mono bg-gray-900 text-white rounded-lg border-2 h-[50vh] w-3/4 border-gray-300 shadow-md p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Paste your code here..."
                value={code}
                onChange={e => setCode(e.target.value)}
            ></textarea>

            {explanation && (
                <div className="bg-gray-800 rounded-lg border-2 mt-5 p-5 w-3/4 shadow">
                    <h3 className="font-bold mb-2 text-xl">Explanation:</h3>
                    <pre className="leading-tight whitespace-pre-wrap text-lg md:text-xl text-gray-200 font-sans "> <ReactMarkdown>{explanation}</ReactMarkdown></pre>
                </div>
            )}

            <div className='flex flex-col md:flex-row justify-around w-3/4 m-2'>
                <Button onClick={handleSummarize} disabled={loading || !code}>
                    {loading ? 'Summarizing...' : 'Summarize'}
                </Button>
                <Button onClick={handleClear}>Clear</Button>
                {explanation && <Button onClick={handleCopy} disabled={copyText === 'Copied' || !explanation}>{copyText}</Button>}
            </div>

        </div>
    );
};