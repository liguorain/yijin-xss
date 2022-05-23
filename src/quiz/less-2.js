const title = '不让你用 <script>';
const template =
`<!DOCTYPE html>
<html>
  <head>
   <title>渲染用户输入的图片</title>
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
  s = s
  .replace('<script', '')
  .replace('<img', '')
  .replace('<iframe', '')
  .replace('<video', '')
  .replace('<object', '');
  return '<h1>' + s + '</h1>'
};

const code =
`function parser(s){
  s = s
  .replace('<script', '')
  .replace('<img', '')
  .replace('<iframe', '')
  .replace('<video', '')
  .replace('<object', '');
  return '<h1>' + s + '</h1>'
}`;

const describe = `
很显然，这个菜鸟程序员认识到了直接渲染用户输入内容的问题所在，所以针对上次攻击者使用的 Payload ，他做了一个重大改进：
把 <script> 、<img>、<iframe> 标签给屏蔽了（实际上都是 Murphy 写的）。
—— 但是这样的屏蔽方式是“违背祖宗”的，因为 HTML 本身有着强大的纠错能力——它不区分大小写！
并且这种拙劣的过滤方法还存在许多其他的绕过方法。
`;

const helpText = [
  'XSS 就是出其不意，夹带私货',
  '输入HTML标签试试呢！比如 img',
  '就是 <img src /> 啦！',
  '是不是标签就渲染出来啦？',
  '怎么去触发一个'
];

export const less2 = {
    title,
    code,
    template,
    parser,
    describe,
    helpText
};