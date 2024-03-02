import React,{ useState } from 'react'


export default function TextForm(props) {
    
    // setText("new text");
    const handleUpClick = () =>{
        console.log("Upper case was clicked "+text);
        let newtext=text.toUpperCase();
       setText(newtext);
       props.showAlert("converted to uppercase","Success")
    }
    const handle = () =>{
        console.log("Upper case was clicked "+text);
        
        let newtext=text.toLowerCase();
       setText(newtext);
       props.showAlert("converted to Lowercase","Success")
    }
    const handleOnChanrge = (event) =>{
     
        setText(event.target.value)
    }

    const handleCopy = () =>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied!","Succes")

    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const cleartext = () =>{
        let newtext= " ";
        setText(newtext);
        props.showAlert("Text cleared!","Succes")
    }

   

    const [text, setText] = useState('text here');
    return (
        <>
        <div className="container">
           <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChanrge} style={{backgroundColor:props.mode==='light'?'white':'grey'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handle} >convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={cleartext} >cleartext</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >copyText</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >handle spaces </button>
        </div>
        <div className="conatainer my-4"> 
        {/* my-2 is margin  */}
           <h1> Your text summary </h1>
           <p> {text.split(" ").length} and {text.length} charaters</p>
           <p> {.008 * text.split(" ").length} Minutes read</p>
           <h3>Preview </h3>
           <p>{text.length>0?text:"Enter text to preview "}</p>
        </div>
        </>
    )
}
