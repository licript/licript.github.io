#### 双重JSON字符串解决方案

##### 问题:
直播业务里, h5需要通过广播来接收服务端的数据, 由于服务端的数据来自下游各个业务方, 由于golang的特性, 无法知道各个业务方具体数据类型,所以只能已字符串的形式传过来.App里h5要接收到广播首先是要通过一层native的透传才能拿到最新的广播数据,由于App端上直接对数据做了一层骚处理, 广播透传的数据就会出现了问题

我们看下App端接收到广播后,再做一次处理后的广播数据:
```json
{"cmd":"xxxx","data":{"timestamp":1606137120,"widget_list":{"4":{"type":5,"sub_key":"support_task_info","sub_data":"{\"list\":[{\"max\":5000,\"current\":2259,\"name\":\"\",\"isFinish\":0,\"level\":2,\"taskType\":5100,\"act_id\":28,\"sort\":6100},{\"max\":2,\"current\":0,\"name\":\"\",\"isFinish\":0,\"level\":0,\"taskType\":5400,\"act_id\":29,\"sort\":5400}],\"assist\":{\"anchor\":{\"uname\":\"zbcs039\",\"face\":\"http://i0.hdslb.com/bfs/face/member/noface.jpg\"},\"assist\":{\"uname\":\"zbcs093\",\"face\":\"http://i0.hdslb.com/bfs/face/member/noface.jpg\"}},\"status\":1,\"url\":\"https://live.bilibili.com/activity/live-activity-battle/index.html?room_id=460730#/anchor-support\",\"config_info\":{\"bg_color\":\"#1C2663\",\"no_progress_color\":\"#FFFFFF\",\"yes_progress_color\":\"#FCD089\",\"level_font_color\":\"#DBA95F\",\"progress_font_color\":\"#3C326F\",\"task_font_color\":\"#FEE1AB\",\"list\":null,\"url\":\"https://live.bilibili.com/activity/live-activity-battle/index.html?room_id=460730#/anchor-support\",\"act_id\":20}}"}}},"recv_time":"2020-11-23 21:11:59"}
```
这是一个字符串,本身前端拿到JSON字符串可以通过JSON.parse解析为可处理的对象, 但是这段JSON字符串里有个sub_data数据又是个JSON字符串,这样的双重JSON字符串会导致,前端接收到的上面的JSON字符串是有问题的,直接放在浏览器控制台打印出来会报错:
```js
Uncaught SyntaxError: Unexpected identifier
```
那么如何处理呢?
##### 解决办法
1. 可以通过正则表达式匹配
  正则表达式匹配sub_data即可
2. 这个方法比较独特, 会对测试同学相当不友好...
  首先服务端发送的广播中的sub_data是个字符串, 我们可以让服务端将这段字符串进行encodeURIComponent, 然后将整体传给App端上, 这样就不会是双重JSON了, 然后只需要h5接收到信息后将sub_data的数据重新decode即可.

