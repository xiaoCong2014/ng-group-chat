快速开始
--

## 安装依赖

```CLI
    npm install
```

## 启动server

```CLI
    node server.js  // 开发环境也可以使用 [nodemo](https://github.com/remy/nodemon) 工具替代node  
```     

## 一些坑

- ngModel绑定到input元素时 必须要有name属性 如果遗漏name="message" 是绑定不成功的--且不报错！

~~~html
   <input [(ngModel)]="message.text" type="text" class="form-control" name="message" id="message" placeholder="your message goes here!">
~~~   


## 参考&&资料
- 关于私聊功能 可以参考[chat-server.js](https://github.com/yiqing95/nodejs-chat-complete/blob/master/lib/chat-server.js)
上面的在youtube上是有视频的：[Smitha Milli
](http://youtu.be/c01OHDUpDMU)

- vscode 格式化代码 [How do you format code in Visual Studio Code (VSCode)](https://stackoverflow.com/questions/29973357/how-do-you-format-code-in-visual-studio-code-vscode)
~~~
    On Windows Shift + Alt + F
    On Mac Shift + Option + F
    On Ubuntu Ctrl + Shift + I
~~~

- 小图标使用了 google的material [material-icons](https://material.io/icons/)    

- 画图使用 [draw-io](https://www.draw.io)

- 浏览器端js 使用了momentjs 处理时间相关的输出

- 使用RxJs版本的可以参考： [Socket.io with RxJs in Angular](https://github.com/thelgevold/rxjs-socket.io)

# 下面的是 ng cli 自动生成的

# NgGroupChat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
