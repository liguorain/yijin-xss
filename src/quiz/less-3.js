const title = '正则替换解决大小写的问题';
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
  .replace(/<script/ig, '')
  .replace(/<img/ig, '')
  .replace(/<iframe/ig, '')
  .replace(/<video/ig, '')
  .replace(/<object/ig, '');
  return '<h1>' + s + '</h1>'
};

const code =
`function parser(s){
  // 正则表达式后面的 i 表示“忽略大小写”，也就是说：无论是
  // 大写还是小写，都会被识别并替换掉，大写绕过就不行了
  s = s
  .replace(/<script/ig, '')
  .replace(/<img/ig, '')
  .replace(/<iframe/ig, '')
  .replace(/<video/ig, '')
  .replace(/<object/ig, '');
  return '<h1>' + s + '</h1>'
}`;

const describe = `
吃一堑长一智是好的，但是被攻击者牵着鼻子走是一个优秀的程序员应当避免的行为。
如果仅仅在程序出了问题之后进行简单的修修补补，而不去思考问题背后的深层原因，那么这个问题永远得不到圆满的解决。
正则替换避免大写绕过，但是如果对方写两次呢？
`;

export const less3 = {
    title,
    code,
    template,
    parser,
    describe
};