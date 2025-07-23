import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("")
    const [previousPrompt, setPreviousPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    
    const delayPara = (index, nextWord) =>{
        setTimeout(function () {
            setResultData(prev=>prev+nextWord);
        }, 75*index);
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)
    }
     

    const onSent = async(prompt) =>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response
        if(prompt !== undefined){
            response = await run(prompt);
            setRecentPrompt(prompt);
        }else{
            setPreviousPrompt(prev=>[...prev, input])
            setRecentPrompt(input)
            response = await run(input);
        }
        // setRecentPrompt(input)

        // setPreviousPrompt(prev=>[...prev, input])

        // response = await run(input);
        let responseArray = response.split("**");
        let newResponse = "";
        for(let i=0; i<responseArray.length; i++){
            if(i===0 || i%2 !== 1){
                newResponse += responseArray[i];
            }else{
                newResponse += "<strong>" + responseArray[i] + "</strong>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</strong>")
        let newResponseArray = newResponse2.split(" ");
        for(let i=0; i<newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord+" ");
        }
    
        
        // await run(input)
        // setResultData(newResponse);

        setLoading(false)
        setInput("")

    }

    // onSent("What is react js")

    const contextValue = {
        previousPrompt, 
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,
        newChat,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;