<template>
  <div class="toasted" v-show="isShow">
    {{message}}
  </div>
</template>


<style>
.toasted{
  position: fixed;
  top: 50%;
  left: 50%;
  font-size: 26px;
  transform: translate(-50%,-50%);
  padding: 5px;
  background-color: red;
  z-index: 99999;
}
</style>
