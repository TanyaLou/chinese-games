/* ============================================================
   links.js  —  全部练习链接（这是你平时唯一需要修改的文件）

   每行一条链接，用 | 分隔：

       教材 | 册 | 单元 | 课 | 链接名称 | 类型 | 网址

   · 「教材」栏写教材名称，写全名或只写关键字都行，例如「暨南」「YCT」「拼音」。
   · 「类型」可以留空不写，系统会根据网址自动判断（Wordwall / Quizlet / Blooket …）
   · 「册 / 单元 / 课」要和 data.js 里的名称一致；如果写了一个还不存在的课名，
     系统会自动新建这一课。
   · 以 // 开头的行是说明文字，会被忽略。

   本网站目前的教材：
       · 中文（小学·暨南大学版）（34 条链接）
       · YCT标准教程（70 条链接）
       · 幼儿汉语（24 条链接）
       · 汉语拼音（0 条链接）

   ★ 不会手写没关系：打开 add.html「添加链接向导」，点几下就能生成一行，
     复制粘贴到本文件最下面的「新链接添加区」即可。
   ============================================================ */

const LINK_DATA = `

// ---------------------------------------------------------
// 中文（小学·暨南大学版）（34 条）
// ---------------------------------------------------------
中文（小学·暨南大学版）|第四册|第一单元|第一课|词语学习|Quizlet|https://quizlet.com/ie/1104475463/%E5%9B%9B1%E7%BB%99%E7%88%B7%E7%88%B7%E7%9A%84%E4%BF%A1-flash-cards/?i=3vrcho&x=1jqt
中文（小学·暨南大学版）|第四册|第一单元|第一课|听力练习1|Wordwall|https://wordwall.net/resource/101512747
中文（小学·暨南大学版）|第四册|第一单元|第一课|听力练习2|Wordwall|https://wordwall.net/resource/101512256
中文（小学·暨南大学版）|第四册|第一单元|第一课|字词理解1|Wordwall|https://wordwall.net/resource/101512920
中文（小学·暨南大学版）|第四册|第一单元|第一课|字词理解2|Wordwall|https://wordwall.net/resource/101513292
中文（小学·暨南大学版）|第四册|第一单元|第一课|打字练习|Blooket|https://play.blooket.com/play?hwId=690e3eefdf37d79675611c1d
中文（小学·暨南大学版）|第四册|第一单元|第一课|句子练习|Wordwall|https://wordwall.net/resource/82280042
中文（小学·暨南大学版）|第四册|第一单元|第二课|词语学习|Quizlet|https://quizlet.com/ie/1105562236/%E5%9B%9B2%E9%A2%90%E5%92%8C%E5%9B%AD-flash-cards/?i=3vrcho&x=1jqt
中文（小学·暨南大学版）|第四册|第一单元|第二课|听力练习|Wordwall|https://wordwall.net/resource/83438411
中文（小学·暨南大学版）|第四册|第一单元|第二课|词语理解|Wordwall|https://wordwall.net/resource/83454721
中文（小学·暨南大学版）|第四册|第一单元|第二课|打字练习|Blooket|https://play.blooket.com/play?hwId=6931f4cc0a7f5dfd859eb967
中文（小学·暨南大学版）|第四册|第一单元|第二课|句子练习|Wordwall|https://wordwall.net/resource/83925389
中文（小学·暨南大学版）|第四册|第三单元|第八课|词语学习|Quizlet|https://quizlet.com/ie/1090916550/%E5%9B%9B8%E5%8F%B8%E9%A9%AC%E5%85%89-flash-cards/?i=3vrcho&x=1jqt
中文（小学·暨南大学版）|第四册|第三单元|第八课|听力练习1|Wordwall|https://wordwall.net/resource/99421698
中文（小学·暨南大学版）|第四册|第三单元|第八课|听力练习2|Wordwall|https://wordwall.net/resource/99422287
中文（小学·暨南大学版）|第四册|第三单元|第八课|字词理解|Wordwall|https://wordwall.net/resource/101572910
中文（小学·暨南大学版）|第四册|第三单元|第八课|打字练习|Blooket|https://play.blooket.com/play?hwId=690fa349342e0b81ef949d31
中文（小学·暨南大学版）|第四册|第三单元|第八课|句子练习|Wordwall|https://wordwall.net/resource/99421855
中文（小学·暨南大学版）|第四册|第三单元|第九课|词语学习|Quizlet|https://quizlet.com/ie/1108652414/%E5%9B%9B9%E6%95%B0%E6%98%9F%E6%98%9F%E7%9A%84%E5%AD%A9%E5%AD%90-flash-cards/?i=3vrcho&x=1qqt
中文（小学·暨南大学版）|第四册|第三单元|第九课|听力练习1|Wordwall|https://wordwall.net/resource/102134359
中文（小学·暨南大学版）|第四册|第三单元|第九课|听力练习2|Wordwall|https://wordwall.net/resource/102134905
中文（小学·暨南大学版）|第四册|第三单元|第九课|听力练习3|Wordwall|https://wordwall.net/resource/102135148
中文（小学·暨南大学版）|第四册|第三单元|第九课|字词理解1|Wordwall|https://wordwall.net/resource/102135568
中文（小学·暨南大学版）|第四册|第三单元|第九课|字词理解2|Wordwall|https://wordwall.net/resource/102135694
中文（小学·暨南大学版）|第四册|第三单元|第九课|字词理解3|Wordwall|https://wordwall.net/resource/102135745
中文（小学·暨南大学版）|第四册|第三单元|第九课|打字练习|Blooket|https://play.blooket.com/play?hwId=692a16e309ef6218b2076c95
中文（小学·暨南大学版）|第四册|第三单元|第九课|句子练习|Wordwall|https://wordwall.net/resource/102136377
中文（小学·暨南大学版）|第五册|第一单元|第一课|词语学习|Quizlet|https://quizlet.com/ie/1104475463/%E5%9B%9B1%E7%BB%99%E7%88%B7%E7%88%B7%E7%9A%84%E4%BF%A1-flash-cards/?i=3vrcho&x=1jqt
中文（小学·暨南大学版）|第五册|第一单元|第一课|听力练习1|Wordwall|https://wordwall.net/resource/101512747
中文（小学·暨南大学版）|第五册|第一单元|第一课|听力练习2|Wordwall|https://wordwall.net/resource/101512256
中文（小学·暨南大学版）|第五册|第一单元|第一课|字词理解1|Wordwall|https://wordwall.net/resource/101512920
中文（小学·暨南大学版）|第五册|第一单元|第一课|字词理解2|Wordwall|https://wordwall.net/resource/101513292
中文（小学·暨南大学版）|第五册|第一单元|第一课|打字练习|Blooket|https://play.blooket.com/play?hwId=690e3eefdf37d79675611c1d
中文（小学·暨南大学版）|第五册|第一单元|第一课|句子练习|Wordwall|https://wordwall.net/resource/82280042

// ---------------------------------------------------------
// YCT标准教程（70 条）
// ---------------------------------------------------------
YCT标准教程|第一册|全册12课|第一课|字词学习|Quizlet|https://quizlet.com/ie/1112022676/%E4%B8%801%E4%BD%A0%E5%A5%BD%E6%8B%BC%E9%9F%B3-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第一册|全册12课|第一课|听力练习|Wordwall|https://wordwall.net/resource/86361339
YCT标准教程|第一册|全册12课|第一课|字词理解1|Wordwall|https://wordwall.net/resource/86361545
YCT标准教程|第一册|全册12课|第一课|字词理解2|Blooket|https://play.blooket.com/play?hwId=6921e8b503dd86384d43c403
YCT标准教程|第一册|全册12课|第一课|数字理解|Wordwall|https://wordwall.net/resource/102681365
YCT标准教程|第一册|全册12课|第一课|句子搭配|Wordwall|https://wordwall.net/resource/86361632
YCT标准教程|第一册|全册12课|第一课|打字练习|Blooket|https://play.blooket.com/play?hwId=6921e8b503dd86384d43c403
YCT标准教程|第一册|全册12课|第二课|字词学习|Quizlet|https://quizlet.com/ie/1129311034/%E4%B8%802%E4%BD%A0%E5%8F%AB%E4%BB%80%E4%B9%88-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第一册|全册12课|第二课|词语理解|Wordwall|https://wordwall.net/resource/87636444
YCT标准教程|第一册|全册12课|第二课|听力训练|Wordwall|https://wordwall.net/resource/87636407
YCT标准教程|第一册|全册12课|第二课|句子顺序|Wordwall|https://wordwall.net/resource/87636931
YCT标准教程|第一册|全册12课|第二课|打字练习|Blooket|https://play.blooket.com/play?hwId=6963bc7682e84ce8e9d4edf7
YCT标准教程|第一册|全册12课|第七课|字词学习|Quizlet|https://quizlet.com/ie/1115899341/%E4%B8%807%E8%BF%99%E6%98%AF%E8%B0%81%E7%9A%84%E7%8B%97-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第一册|全册12课|第七课|字词理解|Wordwall|https://wordwall.net/resource/105314671
YCT标准教程|第一册|全册12课|第七课|听力练习|Wordwall|https://wordwall.net/resource/105314371
YCT标准教程|第一册|全册12课|第七课|句子顺序|Wordwall|https://wordwall.net/resource/105314885
YCT标准教程|第一册|全册12课|第七课|打字练习|Blooket|https://play.blooket.com/play?hwId=6963c027247e814af68b386f
YCT标准教程|第一册|全册12课|第八课|字词学习|Quizlet|https://quizlet.com/ie/1134995585/%E4%B8%808%E6%88%91%E5%8E%BB%E5%95%86%E5%BA%97-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第一册|全册12课|第八课|字词理解|Wordwall|https://wordwall.net/resource/106179624
YCT标准教程|第一册|全册12课|第八课|听力练习|Wordwall|https://wordwall.net/resource/106179977
YCT标准教程|第一册|全册12课|第八课|句子练习1|Wordwall|https://wordwall.net/resource/106180623
YCT标准教程|第一册|全册12课|第八课|句子练习2|Wordwall|https://wordwall.net/resource/106181018
YCT标准教程|第一册|全册12课|第八课|打字练习|Blooket|https://play.blooket.com/play?hwId=69760d8a4b061a8036bfeaef
YCT标准教程|第一册|全册12课|第十一课|Pinyin studying|Quizlet|https://quizlet.com/ie/1112022676/%E4%B8%801%E4%BD%A0%E5%A5%BD%E6%8B%BC%E9%9F%B3-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第一册|全册12课|第十一课|Words studying|Quizlet|https://quizlet.com/ie/1112022133/%E4%B8%801%E4%BD%A0%E5%A5%BD%E8%8B%B1%E8%AF%AD%E8%A7%A3%E9%87%8A-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第一册|全册12课|第十一课|听力练习|Wordwall|https://wordwall.net/resource/102683598
YCT标准教程|第一册|全册12课|第十一课|字词理解1|Wordwall|https://wordwall.net/resource/100024217
YCT标准教程|第一册|全册12课|第十一课|字词理解2|Wordwall|https://wordwall.net/resource/100024688
YCT标准教程|第一册|全册12课|第十一课|字词理解3|Blooket|https://play.blooket.com/play?hwId=6921ea7cce49ce7fcef85ed5
YCT标准教程|第一册|全册12课|第十一课|打字练习|Blooket|https://play.blooket.com/play?hwId=6928c971450ccef6fbf804a5
YCT标准教程|第一册|全册12课|第十一课|句子搭配|Wordwall|https://wordwall.net/resource/102683136
YCT标准教程|第二册|全册12课|第四课|词语练习|Quizlet|https://quizlet.com/ie/1093129149/%E4%BA%8C4%E4%B9%A6%E5%8C%85%E9%87%8C%E6%9C%89%E4%B8%A4%E6%9C%AC%E4%B9%A6-flash-cards/?i=3vrcho&x=1qqt
YCT标准教程|第二册|全册12课|第四课|字词认读1|Wordwall|https://wordwall.net/resource/99747692
YCT标准教程|第二册|全册12课|第四课|字词认读2|Wordwall|https://wordwall.net/resource/99747535
YCT标准教程|第二册|全册12课|第四课|听力练习|Wordwall|https://wordwall.net/resource/105285459
YCT标准教程|第二册|全册12课|第四课|打字练习|Blooket|https://play.blooket.com/play?hwId=6963dae3731f281a32eb03a1
YCT标准教程|第二册|全册12课|第五课|字词学习|Quizlet|https://quizlet.com/ie/1113758155/%E4%BA%8C5%E4%BD%A0%E4%BC%9A%E4%B8%8D%E4%BC%9A%E5%81%9A%E9%A5%AD-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第二册|全册12课|第五课|音形意综合练习1|Wordwall|https://wordwall.net/resource/103601339
YCT标准教程|第二册|全册12课|第五课|音形意综合练习2|Wordwall|https://wordwall.net/resource/103601522
YCT标准教程|第二册|全册12课|第五课|音形意综合练习3|Wordwall|https://wordwall.net/resource/103601651
YCT标准教程|第二册|全册12课|第五课|音形意综合练习4|Wordwall|https://wordwall.net/resource/103601757
YCT标准教程|第二册|全册12课|第五课|听力练习|Wordwall|https://wordwall.net/resource/105285244
YCT标准教程|第二册|全册12课|第五课|完成句子|Wordwall|https://wordwall.net/resource/105284799
YCT标准教程|第二册|全册12课|第五课|打字练习|Blooket|https://play.blooket.com/play?hwId=6928c849be1e414b536efe43
YCT标准教程|第二册|全册12课|第六课|字词学习|Quizlet|https://quizlet.com/ie/1116635097/%E4%BA%8C6%E5%8C%85%E5%AD%90%E5%A4%9A%E5%B0%91%E9%92%B1%E4%B8%80%E4%B8%AA-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第二册|全册12课|第六课|听力练习|Wordwall|https://wordwall.net/resource/103592091
YCT标准教程|第二册|全册12课|第六课|字词认读|Wordwall|https://wordwall.net/resource/103593282
YCT标准教程|第二册|全册12课|第六课|量词练习（easy）|Wordwall|https://wordwall.net/resource/105284246
YCT标准教程|第二册|全册12课|第六课|量词练习（hard）|Wordwall|https://wordwall.net/resource/105284192
YCT标准教程|第二册|全册12课|第六课|打字练习|Blooket|https://play.blooket.com/play?hwId=693b14650bb4125a6134ba6f
YCT标准教程|第二册|全册12课|第七课|字词学习|Quizlet|https://quizlet.com/ie/1117941606/%E4%BA%8C7%E4%BB%8A%E5%A4%A9%E6%AF%94%E6%98%A8%E5%A4%A9%E7%83%AD-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第二册|全册12课|第七课|字词认读|Wordwall|https://wordwall.net/resource/105284052
YCT标准教程|第二册|全册12课|第七课|听力练习|Wordwall|https://wordwall.net/resource/105285136
YCT标准教程|第二册|全册12课|第七课|打字练习|Blooket|https://play.blooket.com/play?hwId=6969122aacac3acbc395a59b
YCT标准教程|第二册|全册12课|第七课|句子练习|Wordwall|https://wordwall.net/resource/106350954
YCT标准教程|第二册|全册12课|第八课|字词学习|Quizlet|https://quizlet.com/ie/1157638900/%E4%BA%8C8%E9%A9%AC%E4%B8%81%E6%AF%94%E6%88%91%E5%A4%A7%E4%B8%89%E5%B2%81-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第二册|全册12课|第八课|听力练习|Wordwall|https://wordwall.net/resource/106550728
YCT标准教程|第二册|全册12课|第八课|字词理解|Wordwall|https://wordwall.net/resource/106551894
YCT标准教程|第二册|全册12课|第八课|句子练习|Wordwall|https://wordwall.net/resource/106552237
YCT标准教程|第二册|全册12课|第八课|打字练习|Blooket|https://play.blooket.com/play?hwId=69bae9f17df688036f2b7157
YCT标准教程|第二册|全册12课|第九课|字词学习|Quizlet|https://quizlet.com/ie/1149120507/%E4%BA%8C9%E4%BD%A0%E4%BB%8A%E5%A4%A9%E5%81%9A%E4%BB%80%E4%B9%88%E4%BA%86-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第二册|全册12课|第九课|字词理解|Wordwall|https://wordwall.net/resource/108318224
YCT标准教程|第二册|全册12课|第九课|听力练习|Wordwall|https://wordwall.net/resource/108320791
YCT标准教程|第二册|全册12课|第九课|句子练习|Wordwall|https://wordwall.net/resource/108320292
YCT标准教程|第二册|全册12课|第九课|打字练习|Blooket|https://play.blooket.com/play?hwId=69a0920c29bfae7262ed0a2a
YCT标准教程|第二册|全册12课|第十课|字词学习|Quizlet|https://quizlet.com/ie/1160331144/%E4%BA%8C10%E4%BD%A0%E6%80%8E%E4%B9%88%E4%BA%86-flash-cards/?i=3vrcho&x=1jqt
YCT标准教程|第二册|全册12课|第十课|字词理解|Wordwall|https://wordwall.net/resource/110117722
YCT标准教程|第二册|全册12课|第十课|听力练习|Wordwall|https://wordwall.net/resource/110117471
YCT标准教程|第二册|全册12课|第十课|句子练习|Wordwall|https://wordwall.net/resource/110119247
YCT标准教程|第二册|全册12课|第十课|打字练习|Blooket|https://play.blooket.com/play?hwId=69c409dd82ada3b39c42f2b1

// ---------------------------------------------------------
// 幼儿汉语（24 条）
// ---------------------------------------------------------
幼儿汉语|第二册|全册10课|一|字词认读|Wordwall|https://wordwall.net/resource/81477553
幼儿汉语|第二册|全册10课|一|听力练习|Wordwall|https://wordwall.net/resource/97731750
幼儿汉语|第二册|全册10课|二|听力训练|Wordwall|https://wordwall.net/resource/81952033
幼儿汉语|第二册|全册10课|二|字词理解|Wordwall|https://wordwall.net/resource/81951745
幼儿汉语|第二册|全册10课|三|字词认读|Wordwall|https://wordwall.net/resource/82095839
幼儿汉语|第二册|全册10课|三|听力练习|Wordwall|https://wordwall.net/resource/99173199
幼儿汉语|第二册|全册10课|三|字词理解|Wordwall|https://wordwall.net/resource/99173572
幼儿汉语|第二册|全册10课|四|句子练习|Wordwall|https://wordwall.net/resource/83337036
幼儿汉语|第二册|全册10课|四|字词练习|Wordwall|https://wordwall.net/resource/83336767
幼儿汉语|第二册|全册10课|五|字词认读|Wordwall|https://wordwall.net/resource/83743039
幼儿汉语|第二册|全册10课|五|听力练习|Wordwall|https://wordwall.net/resource/85484951
幼儿汉语|第二册|全册10课|六|听力练习|Wordwall|https://wordwall.net/resource/85485909
幼儿汉语|第二册|全册10课|六|字词理解|Wordwall|https://wordwall.net/resource/86438814
幼儿汉语|第二册|全册10课|七|字词理解|Wordwall|https://wordwall.net/resource/86440206
幼儿汉语|第二册|全册10课|七|听力训练|Wordwall|https://wordwall.net/resource/86443069
幼儿汉语|第二册|全册10课|八|数字读音|Wordwall|https://wordwall.net/resource/86716150
幼儿汉语|第二册|全册10课|八|数字理解|Wordwall|https://wordwall.net/resource/86716096
幼儿汉语|第二册|全册10课|八|字词理解|Wordwall|https://wordwall.net/resource/86716532
幼儿汉语|第二册|全册10课|九|字词理解|Wordwall|https://wordwall.net/resource/87302648
幼儿汉语|第二册|全册10课|九|听力练习|Wordwall|https://wordwall.net/resource/87302795
幼儿汉语|第二册|全册10课|十|听力练习|Wordwall|https://wordwall.net/resource/87854600
幼儿汉语|第二册|全册10课|十|听力练习2|Wordwall|https://wordwall.net/resource/87854656
幼儿汉语|第二册|全册10课|十|词语理解|Wordwall|https://wordwall.net/resource/87855317
幼儿汉语|第二册|全册10课|十|句子总复习|Wordwall|https://wordwall.net/resource/88415263


/* ============================================================
   ★★★  新链接加在下面这一行下面就行  ★★★
   （直接在下面另起一行粘贴，例如：）

   YCT标准教程|第二册|全册12课|第八课|听力练习3|Wordwall|https://wordwall.net/resource/12345678

   ============================================================ */


`;
