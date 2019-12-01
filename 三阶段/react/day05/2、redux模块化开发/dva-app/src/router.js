import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Wechat from './routes/Wechat';
import Contect from './routes/Contect';
import Discover from './routes/Discover';
import Mine from './routes/Mine';
// 把仓库注册到全局，让所有组件都有机会访问
import { Provider } from 'react-redux';
// 把仓库引入全局中
import store from './store/index'
{/*用这个 <Provider store={store}> </Provider> 把路由包起来 */ }
function RouterConfig({ history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {/* 默认路径 */}
          <Route path="/" exact component={Wechat} />
          <Route path="/wechat" exact component={Wechat} />

          {/*也可以写成这样
         <Route path="/wechat" exact>
          <Wechat />
        </Route> */}

          <Route path="/contect" exact component={Contect} />
          <Route path="/discover" exact component={Discover} />
          <Route path="/mine" exact component={Mine} />

        </Switch>
      </Router>
    </Provider>
  );
}

export default RouterConfig;
