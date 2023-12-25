import { useEffect, useRef } from 'react';
import { useKey } from './useKey';

export default function SearchInput({ query, onSetQuery })
{

    const inputEl = useRef(null);

    useKey("Enter", function() {
        if(document.activeElement === inputEl.current) return;
        inputEl.current.focus();
        onSetQuery("");
    });

    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => onSetQuery(e.target.value)}
            ref={inputEl} 
        />
    );
}