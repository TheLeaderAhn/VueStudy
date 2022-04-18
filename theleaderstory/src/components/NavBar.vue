<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">TheLeaderBlog</a>
        <button 
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul
                :class="{ 'navbar-nav':true, 'me-auto':menu.me_auto}"
                v-for="menu in menu_category" :key="menu.id"
            >
                <li class="nav-item" v-for="menu_object in menu.value" :key="menu_object.key">
                    <router-link :to="menu_object.url" class="nav-link">
                        {{ menu_object.value }}
                    </router-link>
                </li>
            </ul>
            <ul class="navbar-nav" v-show="notification.id > 0">
                <li class="nav-item"> 
                    <button type="button" class="btn btn-danger">
                        &#128226;
                    </button>
                </li>
            </ul>
        </div>
    </div>
  </nav> 
  <teleport to="#notification" v-if="show_notification">
      <div :class="
        'container notification border border-dark rounded-3 mt-3 p-3 bg-' +
        notification.type
      ">
        <div>
            
        </div>
      </div>

  </teleport>
</template>

<script>
import {ref, computed} from 'vue'

export default {
    name: 'NavBar',
    setup(){
        const menus = [
            { key : 'home', value : '홈', url: '/home', position: 'left'},
            { key : 'app', value : '애플리케이션', url: '/application', position: 'left'},
            { key : 'me', value : 'Profile', url: '/profile', position: 'left'},
        ]
        
        const left_menus = computed(() => menus.filter((i) =>  i.position == 'left'))
        const right_menus = computed(() => menus.filter((i) => i.position == 'right'))

        return {
            menu_category: [
                { id: 1, me_auto : true, value : left_menus.value },
                { id: 2, me_auto : false, value : right_menus.value },
            ],
        }
    },

}
</script>

<style>

</style>