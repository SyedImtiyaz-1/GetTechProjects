import React,{useState} from 'react'
import "./App.css" 
import languages from './Fetch/Languages'
import TranslateLanuage from './Fetch/TranslateFetch'
const App = () => {  
  const [input,setInput]=useState("")
  const [checker,setChecker]=useState({inputLanguage:"en",outputLanguage:"en",output:""})
  const handleInput=(e)=>{setInput(e.target.value)}
  const handleTranslate=()=>{
    if(input.length>0){
      if(checker.inputLanguage && checker.outputLanguage && checker.inputLanguage!==checker.outputLanguage ){
         const tran=TranslateLanuage(checker)
         setChecker(pre=>({...pre,output:tran.Text})) 
      }else{console.log(false)}
    }
  } 
  const handleInputLanguage=(e)=>{setChecker(pre=>({...pre,inputLanguage:e.target.value}))}
  const handleOutputLanguage=(e)=>{setChecker(pre=>({...pre,outputLanguage:e.target.value}))}
  return (
    <main>
      <h1>Translater</h1>
      <section>
        <div className='input_container'>
        <select onChange={handleInputLanguage}>
           {languages.map((item,index)=>(<option key={`input${index}`} value={item.key}>{item.value}</option>))}
        </select>
        <textarea onChange={handleInput} value={input}></textarea>
        </div>
        <div className='translate_container'>
        <select onChange={handleOutputLanguage}>
        {languages.map((item,index)=>(<option key={`output${index}`} value={item.key}>{item.value}</option>))}
       </select>
        <textarea value={checker.output} readOnly></textarea>
        </div>
      </section>
      <button onClick={handleTranslate}>Translate</button>
    </main>
  )
}

export default App
