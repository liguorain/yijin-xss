const title = 'HTML 实体';
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

const describe = `
程序员终于认识到自己的关注点错在哪里了——
攻击者需要使用 < 来构造 HTML 的闭合，所以将 < 转义掉就可以，HTML 的官方方案是使用名为“HTML 实体”的字符编码，例如：
使用 “&lt;” 代替 “<”，这样 HTML 就不会因此产生闭合，而是将其显示为 “<”。
这个程序员一直谨记着这个信条，期间也没出什么岔子，直到有一天，领导让他把用户输入的图片链接显示成图片——
`;

const parser = function parser(s){
  s = s.replace(/</g, '&lt;');
  return '<h1>您输入的图片是：</h1><img src="' + s + '" />'
};

const code =
`function parser(s){
    s = s.replace(/</g, '&lt;');
    return '<h1>您输入的图片是：</h1><img src="' + s + '" />'
}`;

export const less5 = {
    title,
    code,
    template,
    parser,
    describe
};