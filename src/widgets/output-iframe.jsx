/**
 * @file widget/output-iframe.js
 * @desc 用来渲染输入内容的 iframe
 * @dete 2022/05/04
 */

import { useState } from "react";

export function OutputIframe({
    title = '渲染出来的页面：',
    src='#',
    style={
        width: '100%',
        minHeight: 200,
        height: '100%',
        backgroundColor: '#f0f0f0'
    }
}){
    const [frameStyle, setStyle] = useState({
        position: 'unset',
        width: '100%',
        height: 'auto',
        top: 0,
        left: 0,
        backgroundColor: '#fff'
    });

    const switchExpand = function(){
        if(frameStyle.position === 'fixed'){
            setStyle({
                ...frameStyle,
                position: 'unset',
                height: 'auto'
            });
        } else {
            setStyle({
                ...frameStyle,
                position: 'fixed',
                height: '100%'
            });
        };
    }

    return (
        <section
            style={frameStyle}
        >
            <h2
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                {title}

                <button
                    onClick={switchExpand}
                >
                    {
                        frameStyle.position === 'unset'?
                        '全屏':
                        '退出全屏'
                    }
                </button>
            </h2>
            <iframe
                src={src}
                title={title}
                style={style}
            />
        </section>
    )
}