<template>
  <div class="wrapper">
    <meetup-header />
    <main class="main">
      <router-view />
    </main>
    <meetup-footer />
  </div>
</template>

<script>
import MeetupHeader from '@/components/MeetupHeader.vue';
import MeetupFooter from '@/components/MeetupFooter.vue';

export default {
  name: 'App',

  components: {
    MeetupFooter,
    MeetupHeader,
  },
};
</script>

<style>
@import '~@/assets/styles/_fonts.css';
@import '~@/assets/styles/_variables.css';
@import '~@/assets/styles/_common.css';

.wrapper {
  background-color: var(--grey-light);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 0 auto;
}
</style>
