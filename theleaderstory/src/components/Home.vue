<template>
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" 
      :class="{ active: type == 'blog' }"
      aria-current="page" 
      href="#"
      @click="type = 'blog'"
    >
    블로그</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" 
      :class="{ active: type == 'clip' }"
      href="#"
      @click="type= 'clip'"
    >
    VUE 참고
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">공사중</a>
  </li>
</ul>
 <div  v-is="type"></div>
</template>

<script>
import Blog from '/@components/Blog.vue'
import { ref, defineComponent } from 'vue'

// defineComponent 작성
const Clip = defineComponent({
  template: `
   <div class="row">
  <div class="col-sm-6 p-1">
    <div class="card">
      <div class="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/watch?v=iX3Nu1FcZKA"
          title="와 Vite 쓰면 리액트 10배 빨라짐 (과장아님)"
          allowfullscreen
        ></iframe>
      </div>
      <div class="card-body">
        <h5 class="card-title">와 Vite 쓰면 리액트 10배 빨라짐 (과장아님)</h5>
        <p class="card-text">
          와 Vite 쓰면 리액트 10배 빨라짐 (과장아님)
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 p-1">
    <div class="card">
      <div class="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/bvovpsDJvRg"
          title="스크래치 튜토리얼 #2"
          allowfullscreen
        ></iframe>
      </div>
      <div class="card-body">
        <h5 class="card-title">스크래치 튜토리얼 #2</h5>
        <p class="card-text">
          점프하는 고양이를 구현하여 스프라이트의 우동성에 대해 배워봅니다.
        </p>
      </div>
    </div>
  </div>
  </div>
  `,
})

export default {
  setup() {
    const type = ref('blog')
    return { type }
  },
  components: {
    Blog,
    Clip,
  },
}
</script>
