
const title = 'Markdown: 美丽的错误';
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
   br{
     height: 0px;
     padding: 0px;
     margin: 0px;
   }
   </style> 
  </head>
<body>
  __PARSED__
</body>
</html>`;


const parserShow = function(s){
  let text = s
  .replace(/</g, '&lt;')    // 把尖括号转义了，防止 HTML 标签闭合
  .replace(/"/g, '&quot;')  // 把双引号转移了，防止字符串闭合
  .replace(/'/g, '&#39;');  // 自己不曾用过的单引号也注意一下

  text = text.replace(/(?<!\!)\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

  // 将 **要强调的内容** 格式替换为
  // <strong>要强调的内容</strong>
  text = text.replace(/\*\*(\S+)\*\*/g, '<strong>$1</strong>');

  // 将 *斜体的内容* 格式替换为
  // <em></em>
  text = text.replace(/\*(\S+)\*/g, '<em>$1</em>');
 
  text = text
    .replace(
      /!\[(.+?)?\]\((.+?)?\)/g,
      '<img src="$2" alt="$1" />'
    );

    text = text
      .split(/\n|\r/)
      .map(
        line => line
          .replace(/^#{1} (.+)/, '<h1>$1</h1>') // 一级标题
          .replace(/^#{2} (.+)/, '<h2>$1</h2>') // 二级标题
          .replace(/^#{3} (.+)/, '<h3>$1</h3>') // 三级标题
          .replace(/^#{4} (.+)/, '<h4>$1</h4>') // 四级标题
          .replace(/^#{5} (.+)/, '<h5>$1</h5>') // 五级标题
          .replace(/^\* (.+)/, '<ol>$1</ol>')
      ).join('\n');
  return text;
}

const parser = function parser(s){
  return parserShow(s).split(/\n|\r/).join('<div></div>');
};

const code =
`function parser(s){
  let text = s //
    .replace(/</g, '&lt;')    // 把尖括号转义了，防止 HTML 标签闭合
    .replace(/"/g, '&quot;')  // 把双引号转移了，防止字符串闭合
    .replace(/'/g, '&#39;');  // 自己不曾用过的单引号也注意一下
  // [标题](链接)  ===>  <a href="链接">标题</a>
  text = text.replace(
    /(?<!\!)\[(.+?)\]\((.+?)\)/g,
    '<a href="$2">$1</a>'
  );
 
  // ![说明](路径)  ===> <img src="路径" alt="说明" />
  text = text.replace(
      /!\[(.+?)?\]\((.+?)?\)/g,
      '<img src="$2" alt="$1" />'
    );
  return text;
}`;

const describe = `
我们的程序员认真总结了以往对付 XSS 的经验，同样的错误不会再犯第二遍了，这是一个优秀程序员应当具备的素质。他也因此谋得了一份更好的工作，这次他用上了框架，还有富文本编辑器和 Markdown 编辑器。

Vue、React 等前端框架采用了严谨的文本插入方法，规避了很多程序员造成的 XSS 漏洞。但这并不意味着我们已经彻底消灭了 XSS 漏洞。
Markdown 是一种简单的文档写作语法，使用简单的字符标记来表示简洁、美观的文档结构和样式。
Markdown 通常会被生成为 HTML，然后直接渲染到网页，这就导致了：即便使用了框架，也很难规避其中的 XSS 代码隐患。
`;

export const less6 = {
    title,
    template,
    parser,
    code,
    describe,
    parserShow
  }