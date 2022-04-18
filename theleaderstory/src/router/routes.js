//라우터 구성 - 잘못된 url -> Not fuond 나오게 구성
import Profile from '/@components/Profile.vue'
import { defineComponent } from 'vue'

const NotFound = defineComponent({
    template : '<div>Not Found - 페이를 찾을 수 없습니다.</div>',
})

const routes = [
    {path: '/' , redirect : '/profile'},
    {path: '/profile', name: 'profile', component: Profile, alias: '/home'},
    {path: '/:catchAll(.*)+', component: NotFound},
]

export default routes