import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper case is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        console.log("Lower case is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleSentenceCase = () => {
        let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        setText(newText);
    };

    const handleInverseCase = () => {
        let newText = text.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
        setText(newText);
    };

    const handleCapitalizeCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const Clear = () => {
        console.log("Lower case is clicked" + text);
        let newText = '';
        setText(newText);
    }

    const handleAltClick = () => {
        console.log("Alternate case is clicked" + text);
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }
        }
        setText(newText);
    }
    const handleCopy = () => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        alert("Copied the text: " + text);
    };
    

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // text='fsfwesd' , wrong way to set the text
    // setText("This is the newest Text written ");
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label for="myBox" className="form-label">Enter text for analysis</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
                </div>
                <button className='btn btn-warning mx-1 my-1' onClick={handleUpClick}>convert to uppercase</button>
                <button className='btn btn-warning mx-1 my-1' onClick={handleLowClick}>convert to Lowercase</button>
                <button className='btn btn-warning mx-1 my-1' onClick={Clear}>Clear text</button>
                <button className='btn btn-warning mx-1 my-1' onClick={handleAltClick}>Convert to Alternate case</button>
                <button className="btn btn-warning mx-1 my-1" onClick={handleSentenceCase}>Sentence case</button>
                <button className="btn btn-warning mx-1 my-1" onClick={handleInverseCase}>Inverse case</button>
                <button className="btn btn-warning mx-1 my-1" onClick={handleCapitalizeCase}>Capitalize case</button>
                <button className="btn btn-warning mx-1 my-1" onClick={handleCopy}>Copy</button>

            </div>
            <div className="container my-3">
                <h2>Text summry</h2>
                <p>{text.length} character and {text.split(" ").length} words</p>
                <p>Approx time required to read this :- {0.008 * text.split(" ").length} Minutes</p>
                <h3>Preview</h3>
                <p>{text}t</p>
            </div>
        </>
    );
}
