# bestway

> A Vue.js project

## 所需环境


nodejs + vue + mongodb
这三个环境安装我就不细说了，google和百度一搜一堆

首先导入数据库，在压缩包的data文件里面，三个json文件，一个conf数据库配置文件，导入你的mongodb数据库，注意，collection的名字不要改，在项目文件的server/db.js里面写着呢，用了数据库三个表

然后命令行进入项目路径下npm install（安装所需要的包依赖）

npm run dev把vue项目跑起来（http://locahost:8080）

然后再开一个bash命令行窗口，进入项目路径下/bestway/server

supervisor index 启动后台服务（访问localhost:8088看后台服务是否启动）


mongod -f /usr/local/etc/mongod.conf 启动数据库服务

等后台和数据库服务都启动了，项目功能才能正常使用

## 目录结构

dist是前台打包后的文件，后台8088端口访问的是这个，不过如果只需要前台展示的话不打包也可以，我这版本已经打包好了

node_modules是依赖包

server是后台配置文件夹：
db.js是数据库模型文件，来进行你需要的数据模型定义
api.js是后台接口集合，我把所有接口都写在这里了
index.js是后台入口文件，你不需要修改

src是前台，src/assets放的引用的静态资源，包括css，js，images（css我用的scss开发的，需要kola编译，没使用框架，所有样式全部手写，都在style.scss里面）

src/components是写的vue组件

src/router是写的vue路由，里面定义的所有页面

src/views是所有页面，带pc的是pc端，可以在浏览器直接http://localhost:8080/对应页面名字 来访问

## 数据配置
大部分功能演示的时候都没问题， 主要是搜索，我在数据库里面放了三条数据location这个表里，在搜索的时候直接搜索对应名字（Hollywood，Disneyland Park，Sydney Opera House），注意区分大小写，然后会渲染搜索结果，里面的数据都是动态从数据库获取的（包括图片），你加其他地方的话自己按照我数据结构加就可以，因为搜索结果页面有直接导航的功能，google directions只有DRIVING这个模式导航比较远，所以演示时候建议你演示大堡礁，因为是根据你的定位和目的地直接展示导航路线的，如果你从澳洲导航区好莱坞会直接弹窗提示没有合适路线
