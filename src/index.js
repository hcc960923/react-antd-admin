import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import http from '@/utils/request';
import routes from '@/routes/index'
import store from '@/store/store';
import './index.css';
React.$http = http;


function RAA() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          {renderRoutes(routes)}
        </HashRouter>
      </ConfigProvider>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<RAA />);