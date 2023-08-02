import React, { useState, useEffect } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const TypingCodeBlock = ({ code }) => {
  const [displayedCode, setDisplayedCode] = useState('');


  SyntaxHighlighter.registerLanguage('javascript', js);
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedCode((prevCode) => prevCode + code[currentIndex]);
      currentIndex++;
      if (currentIndex === code.length) {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, [code]);

  

  return (
    <div className='text-xs h-[21rem] py-3 ss:w-[30rem] w-[25rem] bg-[#1d1f21] rounded-lg overflow-hidden'>
    <SyntaxHighlighter
      language="javascript"
      style={tomorrowNight}
      showLineNumbers
      wrapLines
      lineNumberContainerStyle={{
        backgroundColor: '#272822',
        paddingRight: "10px"
      }}
      lineNumberStyle={{
        color: '#75715E',
      }}
    >
        
      {displayedCode}
    </SyntaxHighlighter>
    </div>
  );
};

export default TypingCodeBlock;
