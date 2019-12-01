import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Wechat from './routes/Wechat';
import Contect from './routes/Contect';
import Discover from './routes/Discover';
import Mine from './routes/Mine';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* 默认路径 */}
        <Route path="/" exact component={Wechat} />
        <Route path="/wechat" exact component={Wechat} />
        <Route path="/contect" exact component={Contect} />
        <Route path="/discover" exact component={Discover} />
        <Route path="/mine" exact component={Mine} />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
