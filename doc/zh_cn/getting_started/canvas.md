<!-- 
---
title: Canvas动画
date: 2020/3/5 10:00:00
---
-->
# Canvas动画

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> mframe

这篇文章将会介绍如何使用mframe创建canvas动画，使用相同的api，你甚至可以用来播放音乐。

<!--@<iframe height="400" style="width: 100%;" scrolling="no" title="breathe" src="https://codepen.io/arthusliang/embed/wvajZJp?height=400&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/wvajZJp'>breathe</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>@-->

[点击这里体验在线实例](https://codepen.io/arthusliang/pen/wvajZJp)

#### 代码

```
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

var motion = mframe([{
  dom: ctx,
  frames:[
    { arg:{r1:'60',r2:'55', r3:'50'}, time:0},
    { arg:{r1:'70.0',r2:'62.0', r3:'56.0'}, time:40, tween:'easeIn'},
    { arg:{r1:'60.0',r2:'55.0', r3:'50.0'}, time:70, tween:'easeInOut'}
  ],
  events: {
    beforeEach: function() {
      ctx.clearRect(0,0,400,300);
    },
    each: function(i, args){
      ctx.beginPath();
      ctx.arc(200,150,args.r1,0,2*Math.PI);
      ctx.fillStyle='#e6f9fc';
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(200,150,args.r2,0,2*Math.PI);
      ctx.fillStyle='#73e3ff';
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(200,150,args.r3,0,2*Math.PI);
      ctx.fillStyle='#00a0d1';
      ctx.fill();
      ctx.closePath();
    }
  }
}]);

motion.repeat(Infinity);
```

[点击这里体验在线实例](https://codepen.io/arthusliang/pen/wvajZJp)

### beforeEach

在每个渲染帧中，beforeEach方法，会在css, attr和prop渲染前调用。

### each

在每个渲染帧中，beforeEach方法，会在css, attr和prop渲染后调用。

### arg

你可以像使用css, attr和prop一样使用arg。arg模块不会渲染dom，它只是用来帮助生成补间动画需要的数据。