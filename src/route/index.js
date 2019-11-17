import Vue from 'vue';
import VueRouter from 'vue-router';

// 1. 라우트 컴포넌트를 정의하세요.
// 아래 내용들은 다른 파일로부터 가져올 수 있습니다.
import Home from '../page/Home';
import Bar from '../page/Bar';
import Foo from '../page/Foo';

// 2. 라우트를 정의하세요.
// Each route should map to a component. The "component" can
// 각 라우트는 반드시 컴포넌트와 매핑되어야 합니다.
// "component"는 `Vue.extend()`를 통해 만들어진
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체입니다.
const routes = [{ path: '/', component: Home }, { path: '/foo', component: Foo, name: 'foo' }, { path: '/bar', component: Bar }];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
