<script setup lang="ts">
const props = defineProps({
  value: Object
});
</script>

<template>
  <div v-if="props.value">
    <router-link :to="'/board/'+props.value.boardName">
      <div class="item" v-if="props.value">
        <svg style="margin-left: 8px"
            xmlns="http://www.w3.org/2000/svg"
            width="3px" height="7px">
          <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                d="M2.980,3.423 C2.980,3.101 2.844,2.800 2.598,2.577 C2.595,2.574 2.592,2.572 2.590,2.569 L0.518,0.831 C0.393,0.726 0.210,0.746 0.110,0.876 C0.009,1.006 0.028,1.196 0.153,1.301 L2.220,3.035 C2.335,3.142 2.399,3.279 2.399,3.423 C2.399,3.568 2.334,3.707 2.216,3.814 L0.145,5.694 C0.024,5.803 0.011,5.994 0.117,6.120 C0.222,6.245 0.406,6.258 0.527,6.149 L2.598,4.269 C2.844,4.046 2.980,3.745 2.980,3.423 Z"/>
        </svg>
        <span class="title">{{ props.value.boardName }}</span>
        <span class="count">{{ props.value.postCount }}</span>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.item {
  margin-top: 18px;
  color: white;
  font-size: 13px;
  border-radius: 30px;
  padding: 10px;
  position: relative;
  width: 93%;
  transition: color 0.3s ease;
  margin-left: -4px;

}

.title {
  flex: 1;
  margin-left: 13px;
}


.item:hover .space-ship {
  display: block;
  position: absolute;
  right: 3px;
  width: 20px;
}

.item:hover {
  transition: background-color 0.5s ease;
  background:#302f2d;
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