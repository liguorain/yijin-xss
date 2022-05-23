import { useRef } from 'react';

export function ChineseText(props = {}){
  const onChange = props.onChange || (() => {});

  const lockRef = useRef(false);

  function handleInput(event){
    if(lockRef.current) return;
    onChange(event);
  }

  function handleEnd(event){
    lockRef.current = false;
    onChange(event);
  }

  function handleStart(){
    lockRef.current = true
  }

  return (
    <textarea
      {...props}
      onCompositionEnd={handleEnd}
      onCompositionStart={handleStart}
      onInput={handleInput}
      onChange={null}
    />
  )
}