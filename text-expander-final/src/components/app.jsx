import { useState } from 'react';

export default function App()
{
    return (
        <div className="App">
            <TextExpander 
                collapsedNumWords={15}
                expandButtonText='Read more'
                collapsedButtonText='Read less'
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida quis eros ac vehicula. Duis ut tellus eget leo aliquam rhoncus quis at dui. Donec consectetur sit amet leo in vulputate. Integer vehicula tortor eu odio accumsan, sit amet feugiat.
            </TextExpander>
            <TextExpander 
                collapsedNumWords={5}
                buttonColor='#fab43c'
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida quis eros ac vehicula. Duis ut tellus eget leo aliquam rhoncus quis at dui. Donec consectetur sit amet leo in vulputate. Integer vehicula tortor eu odio accumsan, sit amet feugiat.
            </TextExpander>
        </div>
    );
}


function TextExpander({ collapsedNumWords = 10, expandButtonText = "Show more", collapsedButtonText = "Show less", buttonColor = "#1f89cd", expanded = false, className, children })
{
    const [isExpanded, setIsExpanded] = useState(expanded);

    const displayText = isExpanded ? children : children.split(" ").slice(0, collapsedNumWords).join(" ") + "... ";

    const buttonStyle = {
        background: 'none',
        border: 'none',
        font: 'inherit',
        cursor: 'pointer',
        marginLeft: '6px',
        color: buttonColor,
    }

    return(
        <div className={className}>
            <span>{displayText}</span>
            <button onClick={() => setIsExpanded(expanded => !expanded)} style={buttonStyle}>{isExpanded ? collapsedButtonText : expandButtonText}</button>
        </div>
    );
}