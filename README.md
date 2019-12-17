# ts
ts集合

##### client-side

##### src
 - utils：和业务相关的可复用方法
 - tools：和业务无关的纯工具函数
 - assets：图片字体等静态资源
 - api：可复用的接口请求方法
 - config：配置文件
#####  tslint 配置文件
 - <em>defaultSeverity</em>是提醒级别，如果为error则会报错，如果为warning则会警告，如果设为off则关闭，那TSLint就关闭了；
 - <em>extends</em>可指定继承指定的预设配置规则；
 - <em>jsRules</em>用来配置对<code>.js</code>和<code>.jsx</code>文件的校验，配置规则的方法和下面的rules一样；
rules是重点了，我们要让TSLint根据怎样的规则来检查代码，都是在这个里面配置，比如当我们不允许代码中使用eval方法时，就要在这里配置"no-eval": true
 - <em>rulesDirectory</em>可以指定规则配置文件，这里指定相对路径。

##### webpack

- 这里用到一个插件"cross-env"，并且后面跟着一个参数 NODE_ENV=development，这个用来在 webpack.config.js 里通过 process.env.NODE_ENV 来获取当前是开发还是生产环境，这个插件要安装：
```json
{
  "scripts": {
    "start": "cross-env NODE_ENV=development webpack-dev-server --mode=development --config build/webpack.config.js"
  }
}
```
