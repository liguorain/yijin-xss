/**
 * @file utils/index.js - 一些功能性函数的合集
 * @date 2022/05/03
 * @author Murphy
 * @version 0.0.0
 * @status W.I.P
 */

import { useRef } from "react";

/**
 * @function useDebounce - React 专属 debounce 函数
 * @param {Function} fn - 需要 debounce 的函数
 * @param {Number} [duration = 200] - debounce 延时器的等待时间 
 * @returns 
 */
export function useDebounce (fn, duration = 200) {
    const timer = useRef();
  
    return function (...args) {
      const { current } = timer;
      current && clearTimeout(current);
  
      timer.current = setTimeout(() => {
        fn(...args);
        timer.current = null;
      }, duration);
    }
  }

/**
 * @function text2HtmlUrl - 将 HTML 文本转为 URL ，以便在 iframe 里加载
 * @param {String} text
 * @returns {String}
 */
export function text2HtmlUrl(text){
  return URL.createObjectURL(new Blob([text], {
    type: 'text/html'
  }));
}