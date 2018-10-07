# MiNoteExport

## 小米便签批量导出

### 主要是整理知乎网友方法思路，以此记录供后续方便使用

[转载知乎链接](https://www.zhihu.com/question/35329107)

[转载方法](https://www.zhihu.com/question/35329107/answer/168000037)

[转载方法](https://www.zhihu.com/question/35329107/answer/222305150)

前端不会，直接引用@谭啸方法

->先把 [Quick start · artoo.js](http://medialab.github.io/artoo/quick_start/) 里的那个图标拖到书签。然后登录 Mi Cloud ，点击进入到便签页面，打开浏览器控制台，点击刚刚添加的书签，会有提示 artoo 运行成功，然后粘贴这个[爬虫脚本](https://gist.github.com/tvytlx/328966145a0e4eeaf29215aefa4592c1#file-mi-note-export-js)（ 小米便签导出， artoo.js 浏览器脚本 ），所有的便签和文件夹都会下载。

由于gist.github不容易打开，爬虫脚本文件可以直接使用mi-note-export.js文件内容。

在得到浏览器便签导出的整个JSON文件后，需要使用python程序分别整理成单个word文件。此处主要参考@LHG菌不是老黄瓜的程序，运行main.py即可。