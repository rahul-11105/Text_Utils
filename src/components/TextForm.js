import React,{useState} from 'react'
import "../components/stylesheet.css"

export default function TextForm(props) {
    const [text,setText] = useState("");
    function handleUPClick(){
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    function handleLoClick(){
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleClear = ()=>{
        setText(" ");
        props.showAlert("Text has been cleared","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3 container">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{color: props.mode==='dark'?'white':'black',backgroundColor:props.mode==='light'?'white':'grey'}}></textarea>
        <button type="button" className="btn btn-primary my-3" onClick={handleUPClick}>convert to uppercase</button>
        <button type="button" className="btn btn-primary my-3 mx-4" onClick={handleClear}>clear</button>
        <button type="button" className="btn btn-primary my-3" onClick={handleLoClick}>convert to lowercase</button>
    </div>
    <div className='container'>
        <h1>Your text summery</h1>
        <br/>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <br/>
        <p>{0.008*text.split(" ").length} Minutes needs to read Your para.</p>
        <br></br>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
