封装了一些常用的组件

components 目录为封装的组件
views 目录为组件使用的demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 本地预览效果

![side](https://github.com/FredaFei/component_vue/blob/master/previews/1.png)
![index](https://github.com/FredaFei/component_vue/blob/master/previews/2.png)
![alert](https://github.com/FredaFei/component_vue/blob/master/previews/3.png)


## 组件使用文档

### IButton(按钮)

引用：
```
    import IButton from 'components/ibutton';
    Vue.component(IButton);

    <i-button color="red">cancel</i-button>

```

__API__

|     参数     | 说明 | 类型 | 默认值 | 可选值 |
| ------------ | --- | ----- |------|----------------|
| type | 按钮类型 | String | defautl| primary danger|
| size | 按钮尺寸 | String | small | middle large |
| plain | 是否朴素按钮，没有背景色 | Boolean | false | true |
| disabled | 是否禁用状态 | Boolean | false | true |
| row | 是否为底部行动按钮 | Boolean | false | true |
| className | 自定义类名样式 | String | - | - |

### Badge(标记)
引用：
```
    import Badge from 'components/badge';
    Vue.component(Badge);

    <Badge color="red">{{number}}</Badge>

```

__API__

|     参数     | 说明 | 类型 | 默认值 | 可选值 |
| ------------ | --- | ----- |------|----------------|
| type | 标记类型 | String | primary| error success warning|
| size | 标记尺寸 | String | normal | small large |
| color | 自定义标记背景色 | String | - | - |


### Toast（提示框组件）
引用：
```
    import Toast from 'components/toast';
    Vue.use(Toast)

    this.$toast({
       text: 'toast',
       shape: 'rect',
       type: 'tip',
       delay: 6000,
       showBg: true,
       position: 'center'
    });
```

__API__

| 属性        | 类型    |  默认值  |  说明  |
| ---------- | -------- | --------|------- |
| text   | String  |   loading    | 提示文案|
| shape  | String   |   square    | 提示框形状, 'square'正方形，'rect'长方形|
| type   | String    |   tip    | 提示框icon显示类型，'tip'：没有icon，可选值: 'success'：成功, 'error'：失败，'loading'：loading, 'fail'：fail, 'warning'：警告|
| delay    | Number   |   1500    | 提示框显示时间，单位ms|
| showBg    | Boolean   |   false    | 是否显示遮罩层|
| position   | String  |   'center' | 提示框显示位置，'center'：居中，'top'：顶部，'bottom'：底部|

提示：当type不为tip且shape为square时，type的其他可选值才会生效

### notify（确认框组件）

引用：
```
    import notify from 'components/notify';
    Vue.use(notify)

    this.$alert({
        title: 'title',
        content: 'this is a content',
        callBack: ()=>{
            console.log('callBack')
        }
    })
    this.$confirm({
        content:'温馨提示-------------',
        className:'custom custom2',
        btnText:['左侧按钮','右侧按钮']
    });


```

__API__

| 属性        | 类型    |  默认值  |  说明  |
| ---------- | -------- | -------- |------|
| text   | String  |   'loading'    | 提示文案|
| title   | String  |   'title'    | 标题文案|
| showBtn   | Boolean  |   true    | 是否显示底部按钮|
| showBg    | Boolean   |   false    | 是否显示遮罩层|
| btnText   | Array  |   ['cancel','confirm'] | 底部按钮文案|
| className   | String  |   - | 确认框类名|
| callBack   | Function  |   - | 确认按钮回调|

### noData（空白组件）

引用：
```
    import noData from 'components/noData';
    Vue.use(noData)
    <noData type="1"></noData>

```

__API__

| 属性        | 类型    |  默认值  |  说明  |
| ---------- | -------- | -------- |------|
| type   | Number  |   0    | 空白类型 ，可选值: 0：失败, 1：暂无数据 |

### cell（单元格）

引用：
```
    import cell from 'components/cell';
    Vue.use(cell)
    <cell left-lext="left" right-text="right" color="#f44"></cell>

```

__API__

| 属性        | 类型    |  默认值  |  说明  |
| ---------- | -------- | -------- |------|
| isLink   | Boolean  |   true    | 右侧是否有图标 |
| leftText   | String  |   -    | 左侧文案 |
| rightText   | String  |   -    | 右侧文案 |
| color   | String  |   '#333'    | 右侧文案颜色 |

__Event__

|     事件名     | 说明 | 参数 |
| ------------ | --- | ----- |
| click | 点击 cell 时触发 | - |


### ISwitch（Switch 开关，表示两种相互对立的状态间的切换）

引用：
```
  import tabs from 'components/tabs';
  <i-switch :opened="opened" @onchange="changeFn"></i-switch>

```

__API__

| 属性        | 类型    |  默认值  |  说明  |
| ---------- | -------- | -------- |------|
| opened   | Boolean  |   false   | 打开关闭 |
| disabled   | Boolean  | false | 是否禁用 |

__Event__

|     事件名     | 说明 | 参数 |
| ------------ | --- | ----- |
| onchange | 点击 ISwitch 时触发 | - |


### slide（轮播）

引用：
```
  import Slide from '@/components/slide/index.vue'
  <slide :slides="slides" height="3rem" page-style="line"></slide>

```

__API__

| 属性        | 类型    |  默认值  |  说明  |
| ---------- | -------- | -------- |------|
| slides   | Array  | [] | 轮播图所需数据 |
| height   | String  |  3.8rem  | 轮播图高度 |
| pageStyle   | 分页器样式  | dot | 可选值有dot、line |
| pagePos   | 分页器位置  | center | 可选值有right、left、center |


### scrollBox（该组件适用于页面需要上拉下拉加载数据的case）

引用：
```
    import scrollBox from 'components/scrollBox';
    Vue.use(scrollBox)

    <div class="wrap">
       <scroll-box>
         <p v-for="i in 25" :key="i">this is a test {{i}}</p>
       </scroll-box>
    </div>

    // css
    .wrap{
        width: 100vw;
        height: 100vh;
        position: relative;
        background: #ffffff;
        overflow: auto;
        overflow-scrolling: touch;
    }
```

__API__

| 属性        | 类型    |  默认值  |  说明  |
| ---------- | -------- | -------- |------|
| showTop   | Boolean  |   true    | 下拉时头部文案是否显示 |
| showBottom   | Boolean  |   true    | 上拉时底部文案是否显示 |

__Events__

|     事件名     | 说明 | 参数 |
| ------------ | --- | ----- |
| onPullUp | 上拉加载 | - |
| onPullDown | 下拉刷新 | - |

### tabs（tab 标签页）

引用：
```
    import tabs from 'components/tabs';
    import tabNavs from 'components/tabNavs.vue'
    import tabNavsItem from 'components/tabNavsItem.vue'
    import tabPanes from 'components/tabPanes.vue'
    import tabPanesItem from'components/tabPanesItem.vue'
    Vue.use(tabs)
    Vue.use(tabNavs)
    Vue.use(tabNavsItem)
    Vue.use(tabPanes)
    Vue.use(tabPanesItem)

    <tabs :selected-tab.sync="value">
      <tab-navs>
        <tab-navs-item name="tab1">tab 1</tab-navs-item>
        <tab-navs-item name="tab2">tab 2</tab-navs-item>
      </tab-navs>
      <tab-panes>
        <tab-panes-item name="tab1">
          内容1
        </tab-panes-item>
        <tab-panes-item name="tab2">
          内容2
        </tab-panes-item>
      </tab-panes>
    </tabs>

```

__API__

| 属性        | 类型    |  默认值  |  说明  |
| ---------- | -------- | -------- |------|
| selectedTab   | String  |   -    | 默认选中的tab |
| name   | String  | - | 每组的tab名 |和Bootstrap类似的结构和用法

__Event__

|     事件名     | 说明 | 参数 |
| ------------ | --- | ----- |
| click | 点击 cell 时触发 | - |






