
import { useEffect, useState, useRef } from 'react';

const Terminal = () => {
  const [currentText, setCurrentText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  const prompts = [
    "ask me anything",
    "@validate my idea", 
    "@build my workspace",
    "@build AI agent for me"
  ];

  useEffect(() => {
    let currentPromptIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      const currentPrompt = prompts[currentPromptIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentCharIndex < currentPrompt.length) {
          setCurrentText(currentPrompt.substring(0, currentCharIndex + 1));
          currentCharIndex++;
          timeoutId = setTimeout(typeText, 100);
        } else {
          // Pause before deleting
          timeoutId = setTimeout(() => {
            isDeleting = true;
            typeText();
          }, 2000);
        }
      } else {
        // Deleting
        if (currentCharIndex > 0) {
          setCurrentText(currentPrompt.substring(0, currentCharIndex - 1));
          currentCharIndex--;
          timeoutId = setTimeout(typeText, 50);
        } else {
          // Move to next prompt
          isDeleting = false;
          currentPromptIndex = (currentPromptIndex + 1) % prompts.length;
          timeoutId = setTimeout(typeText, 500);
        }
      }
    };

    typeText();

    return () => clearTimeout(timeoutId);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="terminal max-w-2xl mx-auto my-6 opacity-0 animate-fade-in delay-200">
      <div className="terminal-header">
        <div className="terminal-button close-button"></div>
        <div className="terminal-button minimize-button"></div>
        <div className="terminal-button maximize-button"></div>
        <div className="ml-auto text-xs text-gray-400">builders-os-terminal</div>
      </div>
      <div 
        ref={terminalRef}
        className="terminal-content text-sm md:text-base text-green-400 font-mono mt-2 h-16 overflow-hidden flex items-center"
      >
        <span className="text-arcade-purple">$ </span>
        {currentText}
        <span className={`cursor ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
      </div>
    </div>
  );
};

export default Terminal;
