## 滚动条

自定义滚动条，可以使所有浏览器样式统一。与 DOM 出现滚动条的表现基本保持一致。

### 基础示例

:::demo

```html
<v-scroll :height="200">
  <h3>
    《背影》-朱自清
  </h3>
  <p>
    我与父亲不相见已二年余了，我最不能忘记的是他的背影。
  </p>
  <p>
    那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子。我从北京到徐州打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说：“事已如此，不必难过，好在天无绝人之路！”
  </p>
  <p>
    回家变卖典质，父亲还了亏空；又借钱办了丧事。这些日子，家中光景很是惨淡，一半因为丧事，一半因为父亲赋闲。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。
  </p>
  <p>
    到南京时，有朋友约去游逛，勾留了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖；颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有什么要紧的了。他踌躇了一会，终于决定还是自己送我去。我再三劝他不必去；他只说：“不要紧，他们去不好！”
  </p>
  <p>
    我们过了江，进了车站。我买票，他忙着照看行李。行李太多了，得向脚夫行些小费才可过去。他便又忙着和他们讲价钱。我那时真是聪明过分，总觉他说话不大漂亮，非自己插嘴不可，但他终于讲定了价钱；就送我上车。他给我拣定了靠车门的一张椅子；我将他给我做的紫毛大衣铺好座位。他嘱我路上小心，夜里要警醒些，不要受凉。又嘱托茶房好好照应我。我心里暗笑他的迂；他们只认得钱，托他们只是白托！而且我这样大年纪的人，难道还不能料理自己么？唉，我现在想想，那时真是太聪明了！
  </p>
  <p>
    我说道：“爸爸，你走吧。”他往车外看了看说：“我买几个橘子去。你就在此地，不要走动。”我看那边月台的栅栏外有几个卖东西的等着顾客。走到那边月台，须穿过铁道，须跳下去又爬上去。父亲是一个胖子，走过去自然要费事些。我本来要去的，他不肯，只好让他去。我看见他戴着黑布小帽，穿着黑布大马褂，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去，尚不大难。可是他穿过铁道，要爬上那边月台，就不容易了。他用两手攀着上面，两脚再向上缩；他肥胖的身子向左微倾，显出努力的样子，这时我看见他的背影，我的泪很快地流下来了。我赶紧拭干了泪。怕他看见，也怕别人看见。我再向外看时，他已抱了朱红的橘子往回走了。过铁道时，他先将橘子散放在地上，自己慢慢爬下，再抱起橘子走。到这边时，我赶紧去搀他。他和我走到车上，将橘子一股脑儿放在我的皮大衣上。于是扑扑衣上的泥土，心里很轻松似的。过一会儿说：“我走了，到那边来信！”我望着他走出去。他走了几步，回过头看见我，说：“进去吧，里边没人。”等他的背影混入来来往往的人里，再找不着了，我便进来坐下，我的眼泪又来了。
  </p>
  <p>
    近几年来，父亲和我都是东奔西走，家中光景是一日不如一日。他少年出外谋生，独立支持，做了许多大事。哪知老境却如此颓唐！他触目伤怀，自然情不能自已。情郁于中，自然要发之于外；家庭琐屑便往往触他之怒。他待我渐渐不同往日。但最近两年不见，他终于忘却我的不好，只是惦记着我，惦记着我的儿子。我北来后，他写了一信给我，信中说道：“我身体平安，惟膀子疼痛厉害，举箸提笔，诸多不便，大约大去之期不远矣。”我读到此处，在晶莹的泪光中，又看见那肥胖的、青布棉袍黑布马褂的背影。唉！我不知何时再能与他相见！
  </p>
</v-scroll>
```

:::

### 高度设置

通过给属性`height`设置不同的值来适配不同的使用场景。高度值可以为`数值`、`inherit`、`auto`三者中的任意一种，默认值为`inherit`，其中：

- 数值：具体的高度数值(单位为`px`)，内容超给定的高度就会出现滚动条。
- inherit：继承自父元素的高度，内容超出父元素的高度就会出现滚动条，前提是父元素有设置高度，如果父元素是自适应的话，很可能不会出现滚动条。
- auto：自动撑开，垂直方向上一直不会出现滚动条。

#### inherit

:::demo

```html
<div style="height: 200px;">
  <v-scroll>
    <h3>《人过中年》-周国平</h3>
    <p>
      一个人年轻时，外在因素——包括所遇到的人、事情和机会——对他的生活信念和生活道路会发生较大的影响。
      但是，在达到一定年龄以后，外在因素的影响就会大大减弱。那时候，如果他已经形成自己的生活信念，外在因素就很难再使之改变，如果仍未形成，外在因素也就很难再使之形成了。
      人生中的大问题都是没有答案的。但是，一个人唯有思考这些大问题，才能真正拥有自己的生活信念和生活准则，从而对生活中的小问题作出正确的判断。
      航海者根据天上的星座来辨别和确定航向。他永远不会知道那些星座的成分和构造，可是，如果他不知道它们的存在，就会迷失方向，不能解决具体的航行任务。
      他们到了四十岁，于是学着孔夫子的口吻谈论起“不惑”之年来。可是，他们连惑也不曾有过，又如何能不惑呢？
      人过中年，就应该基本戒除功利心、贪心、野心，给善心、闲心、平常心让出地盘了，它们都源自一种看破红尘名利、回归生命本质的觉悟。如果没有这个觉悟会怎样呢？据说容易变得冷漠、贪婪、自负，这也许就是答案吧。
      人生有千百种滋味，品尝到最后，都只留下了一种滋味，就是无奈。生命中的一切花朵都会凋谢，一切凋谢都不可挽回，对此我们只好接受。我们不得不把人生的一切缺憾随同人生一起接受下来，认识到了这一点，我们心中就会产生一种坦然。
      世上有一些东西，是你自己支配不了的，比如运气和机会，舆论和毁誉，那就不去管它们，顺其自然吧。
      世上有一些东西，是你自己可以支配的，比如兴趣和志向，处世和做人，那就在这些方面好好地努力，至于努力的结果是什么，也顺其自然吧。
    </p>
  </v-scroll>
</div>
```

:::

#### auto

:::demo

```html
<v-scroll height="auto">
  <h3>《目送》-龙应台</h3>
  <p>
    我慢慢地、慢慢地意识到，我的落寞，仿佛和另一个背影有关。
    博士学位读完之后，我回台湾教书。到大学报到第一天，父亲用他那辆运送饲料的廉价小货车长途送我。到了我才发觉，他没开到大学正门口，而是停在侧门的窄巷边。卸下行李之后，他爬回车内，准备回去，明明启动了引擎，却又摇下车窗，头伸出来说：“女儿，爸爸觉得很对不起你，这种车子实在不是送大学教授的车子。”
    我看着他的小货车小心地倒车，然后“噗噗”驶出巷口，留下一团黑烟。直到车子转弯看不见了，我还站在那里，一口皮箱旁。
    每个礼拜到医院去看他，是十几年后的时光了。推着他的轮椅散步，他的头低垂到胸口。有一次，发现排泄物淋满了他的裤腿，我蹲下来用自己的手帕帮他擦拭，裙子也沾上了粪便，但是我必须就这样赶回台北上班。护士接过他的轮椅，我拎起皮包，看着轮椅的背影，在自动玻璃门前稍停，然后没入门后。
    我总是在暮色沉沉中奔向机场。
    火葬场的炉门前，棺木是一只巨大而沉重的抽屉，缓缓往前滑行。没有想到可以站得那么近，距离炉门也不过五米。雨丝被风吹斜，飘进长廊内。我掠开雨湿了前额的头发，深深、深深地凝望，希望记得这最后一次的目送。
    我慢慢地、慢慢地了解到，所谓父女母子一场，只不过意味着，你和他的缘分就是今生今世不断地在目送他的背影渐行渐远。你站在小路的这一端，看着他逐渐消失在小路转弯的地方，而且，他用背影默默告诉你：不必追。
  </p>
</v-scroll>
```

:::

### overflow

设定哪个方向上允许出现滚动条，默认水平和垂直方向上都会出现滚动条。

:::demo

```html
<v-row :gutter="24">
  <v-col :span="8">
    overflow: x
    <v-scroll class="scroll-demo" overflow="x" :height="200">
      <ul style="width: 400px;">
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:x #{{ i }}
        </li>
      </ul>
    </v-scroll>
  </v-col>
  <v-col :span="8">
    overflow: y
    <v-scroll class="scroll-demo" overflow="y" :height="200">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:y #{{ i }}
        </li>
      </ul>
    </v-scroll>
  </v-col>
  <v-col :span="8">
    overflow: hidden
    <v-scroll class="scroll-demo" overflow="hidden" :height="200">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:hidden #{{ i }}
        </li>
      </ul>
    </v-scroll>
  </v-col>
</v-row>

<style>
  .scroll-demo {
    border: 1px solid #eee;
  }
  .scroll-item {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }
</style>
```

:::

### 滚动到指定的位置

:::demo

```html
<v-row :gutter="24">
  <v-col :span="8">
    to-x: 100
    <v-scroll class="scroll-demo" :toX="100" :height="200">
      <ul style="width: 400px;">
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:x #{{ i }}
        </li>
      </ul>
    </v-scroll>
  </v-col>
  <v-col :span="8">
    to-y: 100
    <v-scroll class="scroll-demo" :toY="100" :height="200">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:y #{{ i }}
        </li>
      </ul>
    </v-scroll>
  </v-col>
  <v-col :span="8">
    to-index: 6
    <v-scroll class="scroll-demo" :toIndex="6" :height="200">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:hidden #{{ i }}
        </li>
      </ul>
    </v-scroll>
  </v-col>
</v-row>

<style>
  .scroll-demo {
    border: 1px solid #eee;
  }
  .scroll-item {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }
</style>
```

:::

### 方法

:::demo

```html
<v-row :gutter="24">
  <v-col :span="6">
    <v-scroll class="scroll-demo" :height="200" ref="scroll1">
      <ul style="width: 400px;">
        <li v-for="i in 20" :id="'selector' + i" :key="i" class="scroll-item">
          #selector{{ i }}
        </li>
      </ul>
    </v-scroll>
    <div class="scroll-btn">
      <v-button @click="$refs.scroll1.scrollTo('#selector12')" type="secondary">
        scrollTo('#selector12')
      </v-button>
    </div>
  </v-col>
  <v-col :span="6">
    <v-scroll class="scroll-demo" :height="200" ref="scroll2">
      <ul style="width: 400px;">
        <li v-for="i in 20" :id="'selector' + i" :key="i" class="scroll-item">
          {{ i }}. 我慢慢地、慢慢地了解到，所谓父女母子一场
        </li>
      </ul>
    </v-scroll>
    <div class="scroll-btn">
      <v-button @click="$refs.scroll2.scrollToX(100)" type="secondary">
        scrollToX(100)
      </v-button>
    </div>
  </v-col>
  <v-col :span="6">
    <v-scroll class="scroll-demo" :height="200" ref="scroll3">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          {{ i }}. scrollToY
        </li>
      </ul>
    </v-scroll>
    <div class="scroll-btn">
      <v-button @click="$refs.scroll3.scrollToY(100)" type="secondary">
        scrollToY(100)
      </v-button>
    </div>
  </v-col>
  <v-col :span="6">
    <v-scroll class="scroll-demo" :height="200" ref="scroll4">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          {{ i }}. scrollToIndex
        </li>
      </ul>
    </v-scroll>
    <div class="scroll-btn">
      <v-button @click="$refs.scroll4.scrollToIndex(8)" type="secondary">
        scrollToIndex(8)
      </v-button>
    </div>
  </v-col>
</v-row>

<style>
  .scroll-demo {
    border: 1px solid #eee;
  }
  .scroll-item {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }
</style>
```

:::

### Attributes

| 参数     | 说明                           | 类型           | 可选值              | 默认值       |
| -------- | ------------------------------ | -------------- | ------------------- | ------------ |
| height   | 最大高度，超出出现滚动条，必填 | number，string | 数值，inherit，auto | inherit      |
| width    | 最大宽度，超出出现滚动条，必填 | number         | -                   | 外层容器宽度 |
| overflow | 设置哪个方向出现滚动条         | string         | x，y, auto, hidden  | auto         |
| is-block | 是否是块级元素，占满一行       | boolean        | -                   | true         |
| to-x     | 滚动到 X 轴的具体位置，单位 px | number         | -                   | 0            |
| to-y     | 滚动到 Y 轴的具体位置，单位 px | number         | -                   | 0            |
| to-index | 滚动到第几个元素               | number         | -                   | -            |
| to-index | 滚动到第几个元素               | number         | -                   | -            |
| animate  | 是否添加滚动动画               | boolean         | -                   | false            |

- `height`为`inherit`时继承父级容器的高度，要保证外层容器可以取得高。为`auto`时表示不会出现垂直滚动条。
- 不设置`width`时，要保证外层容器可以取得高或者宽
- `to-index`默认会选中当前 slot 的最外层元素的第`index`个子元素，优先级高于`scroll-to-y`
- `animate`为`true`时，对应`scrollTo`、`scrollToX`、`scrollTo`、`scrollToY`、`scrollToIndex`方法使用时会产生`200ms`动画过渡滚动效果。
### Events

| 事件名 | 说明                                                 | 参数       |
| ------ | ---------------------------------------------------- | ---------- |
| scroll | 滚动事件，各类型的滚动过程都会执行该事件，**【注意必要时请添加节流或防抖】** | - |
### Methods

| 方法                 | 说明                                               | 参数                                    |
| -------------------- | -------------------------------------------------- | --------------------------------------- |
| scrollTo(selector)   | 滚动到某个`dom`元素                                | `dom`的唯一选择器，可以精确定位当前元素 |
| update()             | 滚动条内部内容修改后，需要调用该方法自行更新滚动条 | -                                       |
| scrollToX(to)        | 水平滚动条滚动到 to 位置                           | 滚动到的位置，单位 px                   |
| scrollToY(to)        | 垂直滚动条滚动到 to 位置                           | 滚动到的位置，单位 px                   |
| scrollToIndex(index) | 滚动到第几个元素                                   | 元素索引，从 1 开始                     |
| setSize(height, width, isScrollToTop) | 修改容器的宽高           | 高，框，是否滚动到左上角                     |

### Slot

| name    | 说明                                   |
| ------- | -------------------------------------- |
| default | 内容区域，只能有一个最外层元素包裹内容 |

### v-x-scroll 滚动条

| 参数     | 说明                           | 类型    | 可选值             | 默认值       |
| -------- | ------------------------------ | ------- | ------------------ | ------------ |
| width    | 最大宽度，超出出现滚动条，必填 | number  | -                  | 外层容器宽度 |
| overflow | 设置哪个方向出现滚动条         | string  | x，y, auto, hidden | auto         |
| is-block | 是否是块级元素，占满一行       | boolean | -                  | true         |
| to-x     | 滚动到 X 轴的具体位置，单位 px | number  | -                  | 0            |
| to-y     | 滚动到 Y 轴的具体位置，单位 px | number  | -                  | 0            |
| to-index | 滚动到第几个元素               | number  | -                  | -            |
| count    | 最多显示行数                   | number  | -                  | 5            |
| animate  | 是否添加滚动动画               | boolean         | -                   | false            |

- 不设置`width`时，要保证外层容器可以取得高或者宽
- `to-index`默认会选中当前 slot 的最外层元素的第`index`个子元素，优先级高于`scroll-to-y`
- `animate`为`true`时，对应`to-index`、`to-x`、`to-y`使用时会产生`200ms`动画过渡滚动效果。

### Slot

| name    | 说明                                   |
| ------- | -------------------------------------- |
| default | 内容区域，只能有一个最外层元素包裹内容 |
