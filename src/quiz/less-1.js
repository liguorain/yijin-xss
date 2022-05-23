

const title = '没有一丝防备';
const template = 
`<!DOCTYPE html>
<html>
  <head>
   <title>标题</title>
   <style>
   h1,h2,h3,h4,h5,h6{
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0px;
   }
   </style>
  </head>
<body>
  __PARSED__
</body>
</html>`;

const parser = function parser(s){
  return '<h1>' + s + '</h1>'
};

const code = 
`function parser(s){
  return '<h1>' + s + '</h1>'
}`;

const describe = `
这是最简单的 XSS 注入，写这个页面的程序员可能压根不知道世界上还有种漏洞叫做 XSS，黑客最喜欢的就是这种对安全一无所知的开发人员。
不管如何，先拿它来热个身吧。
`;

const helpText = [
  'XSS 就是出其不意，夹带私货',
  '输入HTML标签试试呢！比如 img',
  '就是 <img src /> 啦！',
  '是不是标签就渲染出来啦？',
  '怎么去触发一个'
];

export const less1 = {
    title,
    code,
    template,
    parser,
    describe,
    helpText
};