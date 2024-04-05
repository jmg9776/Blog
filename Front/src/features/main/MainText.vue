<script setup lang="ts">
import Line from "@/assets/line.png";

import {computed, onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';

const props = defineProps({
  maxViewWidth: Boolean
});
const textArray = ["Vision", "Passion", "You", "Love"];
const displayText = ref('');
let textIndex = 0;
let charIndex = 0;

onMounted(() => {
  typeText();
});

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    displayText.value += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(() => eraseText(), 1000);
  }
}

function eraseText() {
  if (charIndex >= 0) {
    displayText.value = textArray[textIndex].substring(0, charIndex);
    charIndex--;
    setTimeout(eraseText, 100);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, 1000);
  }
}

const route = useRoute();
const boardName = computed(() => route.params.boardName as string);
</script>
<template>
  <div class="content" :class="{'max':props.maxViewWidth, 'non-max':!props.maxViewWidth}">
    <div class="title"><div class="gradiant"><span v-if="boardName==undefined">Well Come</span> {{boardName}}</div></div>
    <div class="text">Code with heart</div>
    <div class="text" style="line-height: 1.2; margin-top: -10px">And <span class="gradiant">{{ displayText }}</span></div>
    <img class="line" :src="Line" alt="">
    <div class="text-last">I love coding & communication</div>
    <div class="scroll-down">
      <div class="img-container">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22px" height="12px">
          <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                d="M10.754,11.835 C9.567,11.835 8.460,11.311 7.637,10.360 C7.628,10.349 7.618,10.338 7.609,10.327 L1.206,2.323 C0.820,1.840 0.894,1.134 1.373,0.744 C1.850,0.355 2.551,0.430 2.937,0.913 L9.326,8.898 C9.719,9.345 10.225,9.590 10.754,9.590 C11.289,9.590 11.801,9.339 12.196,8.883 L19.120,0.880 C19.524,0.412 20.227,0.365 20.689,0.772 C21.152,1.180 21.200,1.889 20.796,2.356 L13.872,10.360 C13.048,11.311 11.941,11.835 10.754,11.835 Z"/>
        </svg>
      </div>
    </div>
  </div>

</template>

<style scoped>
* {
  font-family: 'Dosis', sans-serif;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.content {
  position: fixed;
  top:50%;
  transform: translateY(-50%);
  z-index: -1;
  text-align: center;
}

.line {
  margin-top: 13px;
  margin-bottom: 13px;
}
.max {
  left: 255px;
  width: calc(100% - 255px);
}

.non-max {
  left: 0;
  width: 100%;

}

.img-container {
  margin-top: 20px;
  animation: moveImage 1s linear infinite;
}

@keyframes moveImage {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes rotateImage {
  0% {
    transform: rotate(135deg);
  }
  100% {
    transform: rotate(135deg);
  }
}

.title {
  padding: 14px 25px;
  border: 3px solid #9966ff;
  border-radius: 90px;
  width: max-content;
  font-size: 32px;
  font-weight: bold;
  margin: auto auto 10px;
}

.text {
  margin: 0;
  color: white;
  font-size: 110px;
  font-weight: bold;
}

.text-last {
  color: white;
  margin-top: 10px;
  font-size: 32px;
  font-weight: lighter;
}

.scroll-down {
  border: white 1px solid;
  height: 50px;
  width: 50px;
  border-radius: 40px;
  margin: 40px auto auto;
}

.gradiant {
  background: linear-gradient(to right, #9966ff, #de79fb);
  background-clip: text;
  color: transparent;
  display: inline-block;
  animation: textGradient 2s linear infinite;
  background-size: 130% 100%;
}

@keyframes textGradient {
  0%, 100% {
    background-position: 90% 0;
  }
  50% {
    background-position: 0 0;
  }
}
@media (max-width: 768px) {
  .text {
    font-size: 70px;
  }
}
</style>