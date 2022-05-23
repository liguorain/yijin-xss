import { useRef, useCallback } from "react";

export function ChineseInput({
    onChange = () => {}
  }){
    const lockRef = useRef(false);
  
    const handleInput = useCallback(function (event){
      if(lockRef.current) return;
      onChange(event);
    });
  
    const handleEnd = useCallback(function (event){
      lockRef.current = false;
      onChange(event);
    });
  
    const handleStart = useCallback(function(){
      lockRef.current = true
    });
  
    return (
      <input
        onCompositionEnd={handleEnd}
        onCompositionStart={handleStart}
        onInput={handleInput}
      />
    )
  }
