import React from 'react' // 引入react
import {Route, IndexRoute} from 'react-router' // 引入react路由
import {App, Home, JsonList,AddJson,Antd} from './containers' // 引入各容器组件

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="index" component={Home}/>
        <Route path="jsonList" component={JsonList}/>
        <Route path="addJson" component={AddJson}/>
        <Route path="=antd" components={Antd}/>

    </Route>
)