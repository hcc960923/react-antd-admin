import React from 'react';
import { Redirect } from 'react-router-dom';
import store from '@/store/store';
import RouteComponent from "./component";
import { resolveTitle } from '@/utils/formatTool';


const routes = [
    {
        path: "/login",
        meta: { title: "登录", roles: ["user", "admin", "root"]},
        component: RouteComponent.Login 
    },
    {
        path: "/forget",
        meta: { title: "忘记密码", roles: ["user", "admin", "root"]},
        component: RouteComponent.Forget
    },
    {
        path: '/no-authority',
        meta: { title: "权限不足", roles: ["user", "admin", "root"]},
        component: RouteComponent.NoAuthority
    },
    {
        render(props) {
            const token = store.getState().token;
            if (!token) {
                return <Redirect to="/login" />;
            }
            const { location, route } = props;
            resolveTitle(location, route);
            return <RouteComponent.Layout {...props} />;
        },
        routes: [
            {
                path: '/',
                exact: true,
                meta: { title: "首页", roles: ["user", "admin", "root"]},
                render: () => <Redirect to="/dashboard" />
            },
            {
                path: '/dashboard',
                meta: { title: "主页", roles: ["user", "admin", "root"]},
                component: RouteComponent.Dashboard
            },
            {
                path: '/user-menu/user-list',
                meta: { title: "用户列表", roles: ["admin", "root"]},
                render: () =>  store.getState().userInfo.role > 1 ? <RouteComponent.UserList /> : <Redirect to="/no-authority" />
            },
            {
                path: '/user-menu/role-list',
                meta: { title: "角色列表", roles: ["root"]},
                render: () =>  store.getState().userInfo.role > 2 ? <RouteComponent.RoleList /> : <Redirect to="/no-authority" />
            },
            {
                path: '/user-menu',
                meta: { title: "用户管理", roles: ["admin", "root"]},
                render: () =>  <Redirect to="/user-menu/user-list" />
            },
            { 
                path: '/setting-menu/user-setting/basic-info',
                meta: { title: "基本资料", roles: ["user", "admin", "root"]},
                component: RouteComponent.BasicInfo
            },
            { 
                path: '/setting-menu/user-setting/modify-password',
                meta: { title: "修改密码", roles: ["user", "admin", "root"]},
                component: RouteComponent.ModifyPassword
            },
            { 
                path: '/setting-menu/user-setting',
                meta: { title: "用户设置", roles: ["user", "admin", "root"]},
                render: () => <Redirect to="/setting-menu/user-setting/basic-info" />
            },
            { 
                path: '/setting-menu',
                meta: { title: "设置管理", roles: ["user", "admin", "root"]},
                render: () => <Redirect to="/setting-menu/user-setting/basic-info" />
            },
            {
                path: '/icon-list',
                meta: { title: "图标", roles: ["user", "admin", "root"]},
                component: RouteComponent.IconList
            },
            { 
                path: '/chart/line',
                meta: { title: "折线图", roles: ["user", "admin", "root"]},
                component: RouteComponent.Line
            },
            { 
                path: '/chart/bar',
                meta: { title: "柱状图", roles: ["user", "admin", "root"]},
                component: RouteComponent.Bar
            },
            { 
                path: '/chart/pie',
                meta: { title: "饼状图", roles: ["user", "admin", "root"]},
                component: RouteComponent.Pie
            },
            { 
                path: '/chart/key-board',
                meta: { title: "键盘图", roles: ["user", "admin", "root"]},
                component: RouteComponent.KeyBoard
            },
            { 
                path: '/chart/mix',
                meta: { title: "混合图表", roles: ["user", "admin", "root"]},
                component: RouteComponent.Mix
            },
            { 
                path: '/chart/china',
                meta: { title: "全国地图", roles: ["user", "admin", "root"]},
                component: RouteComponent.China
            },
            { 
                path: '/chart',
                meta: { title: "图表", roles: ["user", "admin", "root"]},
                render: () => <Redirect to="/chart/line" />
            },
            { 
                path: '/module/excel',
                meta: { title: "Excel", roles: ["user", "admin", "root"]},
                component: RouteComponent.Excel
            },
            { 
                path: '/module/zip',
                meta: { title: "Zip", roles: ["user", "admin", "root"]},
                component: RouteComponent.Zip
            },
            { 
                path: '/module/pdf',
                meta: { title: "Pdf", roles: ["user", "admin", "root"]},
                component: RouteComponent.Pdf
            },
            { 
                path: '/module/file-admin',
                meta: { title: "文件管理", roles: ["user", "admin", "root"]},
                component: RouteComponent.FileAdmin
            },
            { 
                path: '/module/rich-text',
                meta: { title: "富文本", roles: ["user", "admin", "root"]},
                component: RouteComponent.RichText
            },
            { 
                path: '/module/mark-down',
                meta: { title: "MarkDown", roles: ["user", "admin", "root"]},
                component: RouteComponent.MarkDown
            },
            { 
                path: '/module',
                meta: { title: "组件", roles: ["user", "admin", "root"]},
                render: () => <Redirect to="/chart/excel" />
            },
            { 
                path: '/authority',
                meta: { title: "权限测试", roles: ["user", "admin", "root"]},
                component: RouteComponent.Authority
            },
            { 
                path: '/error-page/no-authority',
                meta: { title: "权限不足", roles: ["user", "admin", "root"]},
                component: RouteComponent.NoAuthority
            },
            { 
                path: '/error-page/not-found',
                meta: { title: "页面丢失", roles: ["user", "admin", "root"]},
                component: RouteComponent.NotFound
            },
            { 
                path: '/error-page/server-error',
                meta: { title: "服务器错误", roles: ["user", "admin", "root"]},
                component: RouteComponent.ServerError
            },
            { 
                path: '/error-page',
                meta: { title: "错误页面", roles: ["user", "admin", "root"]},
                render: () => <Redirect to="/error-page/no-authority" />
            },
            {
                path: '*',
                meta: { title: "页面丢失", roles: ["user", "admin", "root"]},
                render: () => <Redirect to="/not-found" />
            }
        ]
    }
];

export default routes;