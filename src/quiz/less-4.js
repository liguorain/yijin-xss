const title = '全部转成大写';
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
  s = s.toUpperCase();
  return '<h1>' + s + '</h1>'
};

const code =
`function parser(s){
  // 宁枉勿纵
  s = s.toUpperCase();
  return '<h1>' + s + '</h1>'
}`;

const describe = `
这个程序员显然是恼羞成怒了。
他静下来总结了一下：对方要插入 JS ，但 JS 默认的接口都是小写的英文，但是我的程序主要是面向华语人群的，所以转大写不会带来任何负面影响。

但他还是没有跳出被攻击者牵着鼻子走的误区——
1. JS 本身的破绽很多，对应的玩法也是花样繁多；
2. 事实上，XSS 并不一定要 payload 本身可以执行，只要能带入跨站脚本。
`;

// 这里的 payload 需要注意，因为里面会有一个双引号，需要将其改成单引号才可以执行。

export const less4 = {
    title,
    code,
    template,
    parser,
    describe
};