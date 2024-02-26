<script setup lang="ts">
import Header from '@/features/nav/header/HeaderNav.vue'
import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import SideBar from "@/features/nav/side/Sidebar.vue";
import MainSection from "@/features/main/MainSection.vue";
import store from "@/store";

const maxViewWidth = ref<boolean>(false);
const handleResize = () => {
  maxViewWidth.value = window.innerWidth > 1440;
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

const hamButtonClick = computed(() => store.state.hamButtonClick);

function toggle() {
  store.dispatch('toggleHamButton');
}

</script>

<template>
  <SideBar :maxViewWidth="maxViewWidth"/>
  <div>
    <Header :maxViewWidth="maxViewWidth"/>
    <MainSection :maxViewWidth="maxViewWidth"/>
    <div class="cover" v-if="hamButtonClick" @click="toggle"></div>
    <main
        class="content"
        :class="{'content-max-view-width':maxViewWidth, 'content-width':!maxViewWidth}">
      <section>
        <div class="fit">
          <router-view :maxViewWidth="maxViewWidth"/>
        </div>
      </section>
      <div class="footer">
        <div class="footer-text">
          <h1>성장을 추구하는 개발자</h1>
          <h2 class="mobile-hide">매 순간 새로운 것을 배우며, 삶을 혁신하는 기술로 세상에 긍정적인 변화를 만듭니다.<br> 열정을 코드에 담아, 의미 있는 여정 속에서 진정한 가치를 창출하는 'Passionate Developer'입니다.</h2>
          <hr class="footer-divider">
          <h2>CopyRight JMG(jmg97@kakao.com)</h2>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.fit {
  margin: auto;
}
section {
  height: max-content;
  background: white;
  width: 100%;
  padding: 30px 30px 100px;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 362px);
}

.footer {
  background: #302f2d;
  color: white;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.footer-text {
  margin: 80px;
  overflow: hidden;
}

.footer h1 {
  font-weight: bold;
  margin: 25px;
  font-size: 40px;
  white-space: normal;
  color: white;
}

.footer h2 {
  margin: 5px;
  font-weight: lighter;
  line-height: 25px;
  color: #CCC5B9;
}

.mobile-hide {
  max-width: 1200px;
}

@media (max-width: 768px) {
  .mobile-hide {
    display: none;
  }
}

.footer-divider {
  max-width: 600px;
  margin: 20px auto;
  width: 80%;
  border: solid 1px #CCC5B9;
}

.cover {
  background: #302f2d;
  width: 100%;
  height: 100%;
  z-index: 3;
  position: fixed;
  opacity: 0.9;
}

.content {
  position: absolute;
  height: max-content;
  top: 100vh;
  transition: left 0.2s;
}

.content-max-view-width {
  left: 255px;
  width: calc(100vw - 255px);
}

.content-width {
  left: 0;
  width: 100vw;
}
</style>
