import Profile from '/@components/Profile.vue'
import { defineComponent } from 'vue'

const NotFound = defineComponent({
  template: '<div><h1>Not Found 페이지를 찾을수 없습니다. <br/><br/> 라우트 기능 참고 해주세요<h1></div>',
})

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/profile', name: 'profile', component: Profile, alias: '/home' },
  { path: '/:catchAll(.*)+', component: NotFound },
]

export default routes
