<script setup lang="ts">
import SubMenu from "@/components/sidebar/menu/title/SubMenu.vue";
import {ref} from "vue";

const props = defineProps({
  value: Object
});

const showSubMenu = ref<boolean>(false);
const toggleSubMenu = () => {
  showSubMenu.value = !showSubMenu.value;
};

</script>

<template>
  <div class="title-menu-container " v-if="props.value">
    <div class="menu-list" @click="toggleSubMenu">

      <div class="title" :class="{'click':showSubMenu}">
        <div style="flex: 10; padding-left: 3px; padding-right: 3px">{{props.value.categoryName}}
          <span class="count">{{props.value.count}}</span>
        </div>
        <div style="padding-top: 0.3px">
          <svg :class="{ 'flipped-vertical': showSubMenu }"
              xmlns="http://www.w3.org/2000/svg"
              width="14px" height="8px">
            <path fill-rule="evenodd"  opacity="0.302" fill="rgb(255, 255, 255)"
                  d="M6.850,7.759 C6.095,7.759 5.392,7.426 4.869,6.821 C4.863,6.815 4.857,6.808 4.851,6.801 L0.782,1.715 C0.537,1.408 0.584,0.959 0.888,0.712 C1.192,0.464 1.637,0.512 1.882,0.819 L5.942,5.893 C6.192,6.176 6.513,6.333 6.850,6.333 C7.189,6.333 7.515,6.173 7.765,5.883 L12.165,0.798 C12.422,0.501 12.868,0.470 13.163,0.729 C13.457,0.988 13.487,1.439 13.230,1.736 L8.830,6.821 C8.307,7.426 7.604,7.759 6.850,7.759 Z"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="menu" v-if="showSubMenu">
      <div v-for="value in props.value.boardInfoResponse" :key="value.boardName">
        <sub-menu :value="value"></sub-menu>
      </div>
    </div>


  </div>
</template>

<style scoped>
.flipped-vertical {
  transform: scaleY(-1);
  transition: transform 0.3s;
}

.click {
  background: #302f2d;
}
.menu {
  margin-left: 10%;
  color: white;
}
.title-menu-container {
  margin-bottom: 33px;
}
.menu-list {
  margin-top: 5px;
  height: max-content;
}

.title {
  display: flex;
  justify-items: center;
  font-size: 12px;
  padding: 10px 15px 10px 15px;
  border-radius: 30px;
  color: white;
  margin-left: 8%;
  margin-right: 8%;
}

.count {
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 2px;
  margin-left: 10px;
  border-radius: 4px;
  color: #9966ff;
  border: #9966ff 1px solid;
  display: inline-block;
  line-height: 0.9;
  vertical-align: center;
}

</style>