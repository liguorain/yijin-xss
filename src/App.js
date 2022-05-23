/**
 * @file App.js
 * @desc 组织页面架构
 */

import './App.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useState, useEffect/*, useCallback*/ } from 'react';

import { HTMLTemplate } from './consts';

import { useDebounce, text2HtmlUrl } from './utils';

import { ChineseText } from './widgets/chines-text';
import { Title } from './widgets/title';
import { OutputIframe } from './widgets/output-iframe';
import { OutputCode } from './widgets/output-code';

import { less1 } from './quiz/less-1';
import { less2 } from './quiz/less-2';
import { less3 } from './quiz/less-3';
import { less4 } from './quiz/less-4';
import { less5 } from './quiz/less-5';
import { less6 } from './quiz/less-6';
import { userInfo } from './utils/user-info';

const maximum = userInfo.getMaxmium();

const { lesson: currentQuiz } = (window.location.search
  .replace(/^\?/, '')
  .match(/.+=.+/) || [])
  .reduce((prev, next) => {
    const [k, v] = next.split('=');
    prev[k] = v;

    return prev
  }, {
    lesson: 1
  });

const quizList = [
  less1,
  less2,
  less3,
  less4,
  less5,
  less6
];

const CURRENT_QUIZ = + currentQuiz;

if(CURRENT_QUIZ > maximum + 1) {
  window.location.href = window.location.pathname + '?lesson=' + (maximum + 1);
}

const {
  title,
  code,
  template = HTMLTemplate,
  parser,
  describe
} = quizList[CURRENT_QUIZ - 1];

const parserShow = quizList[CURRENT_QUIZ - 1].parserShow || parser;


function App() {
  const [payload, setPayload] = useState('');
  const [parsed , setParsed ] = useState('');
  const [render , setRender ] = useState('');
  const [currentMax, setMaxmium] = useState(maximum);

  useEffect(function(){
    // 成功，整活
    window.xssSuccess = function(){
      alert('恭喜！成功通关！');
      // TODO 这里显示通关整活
      userInfo.setMaxmium(CURRENT_QUIZ);
      setMaxmium(CURRENT_QUIZ)
    }
  }, [])

  const inputChange = useDebounce(
    ({ target: { value } }) => {
      if (payload === value) return
      setPayload(value);
      const parseRes = parser(value);
      const innerHTML = template
        .replace('__PARSED__', parseRes)
        .replace(
          /<\/head>/,
          `<script>alert = function(){parent.xssSuccess()}</script><\/head>`
        )
        ;
      setParsed(parserShow(value));
      setRender(text2HtmlUrl(innerHTML));
    }
  );

  return (
    <div
      className="App"
      style={{ textAlign: 'center' }}
    >
      <Title
        current={CURRENT_QUIZ}
        maximum={currentMax}
        title={`第${CURRENT_QUIZ}关：${title}`}
      />

      <div
        className="labWrap"
        style={{
          display: 'flex',
          margin: 'auto',
          width: 1280,
          justifyContent: 'space-between',
          textAlign: 'left',
        }}
      >
        <div
          className="edit-zone"
          style={{
            width: '640px'
          }}
        >
          <section>
            <h2>漏洞简述</h2>
            <p>{
              describe.split(/\r|\n/).map(
                i => [i, <br key={i} />],
              )
            }</p>
          </section>
          <section>
            <h2>导致漏洞的是下面的代码：</h2>
            <pre>
              <SyntaxHighlighter
                language='js'
                children={code}
              ></SyntaxHighlighter>
            </pre>
          </section>
        </div>
        <div
          className="display-zone"
          style={{
            width: 620
          }}
        >
          <section>
            <h2>在这里输入你的payload：</h2>
            <p>
              <ChineseText
                onChange={inputChange}
                style={{
                  width: '100%',
                  resize: 'vertical'
                }}
              />
            </p>
          </section>
          <OutputCode
            parsed={parsed}
          />
          <OutputIframe
            src={render}
            current={CURRENT_QUIZ}
          />
        </div>

      </div>
      {/* <Waifu/> */}
    </div>
  );
}

export default App;
