import * as waifuTips from './waifu-assets/waifu-tips.json'
import './waifu-assets/live2d'
import './waifu-assets/waifu.css'
import { initModel } from './waifu-assets/waifu-tips';
import { waifuChannel } from '../utils/waifu-channel';

import { useRef, useEffect } from 'react';

window.getHelpText = function getHelpText(selector){
    waifuChannel.offerHelp(waifuChannel);
}

export function Waifu() {
    const dom = useRef();

    useEffect(function(){
        setTimeout(() => {
            const model = initModel(waifuTips);
            console.log('model is now:', model);
        }, 1);
    }, []);

    return (
        <div
            className="index"
            ref={dom}
        >
            <div className="waifu">
                <div className="waifu-tips"></div>

                <canvas id="live2d" className="live2d" />

                <div className="waifu-tool">
                    <p className="fui-home">
                        <i className="el-icon-s-home" />
                    </p>
                    <p className="fui-chat">
                        <i className="el-icon-upload" />
                    </p>
                    <p className="fui-eye">
                        <i className="el-icon-share" />
                    </p>
                    <p className="fui-user">
                        <i className="el-icon-warning" />
                    </p>
                    <p className="fui-photo">
                        <i className="el-icon-camera-solid" />
                    </p>
                    <p className="fui-info-circle">
                        <i className="el-icon-s-comment" />
                    </p>
                    <p className="fui-cross">
                        <i className="el-icon-error" />
                    </p>
                </div>
            </div>
        </div>
    )
}