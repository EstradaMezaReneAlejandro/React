import { useState } from 'react';
import '../CSS/TextExpander.css';

export default function TextExpander({ expandButton, collapseButton, buttonColor, children })
{
    const [show, setShow] = useState(false);

    const button = {
        color: buttonColor,
        marginLeft: !show ? "5px" : "0",
    };

    return (
        <div className={`container ${show ? "active" : "not-active"}`}>
            <p className={!show ? "text-collapsed" : ""}>
                {children}
            </p>
            <div style={button} onClick={() => setShow(show => !show)}>
                {!show ? expandButton : collapseButton}
            </div>
        </div>
    );
}