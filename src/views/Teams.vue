<template>
  <div class="teams">
    <ConfirmedTeams />
  </div>
</template>

<script>
import ConfirmedTeams from "./Home/ConfirmedTeams";
export default {
  components: {
    ConfirmedTeams
  }
};
</script>

<style lang="scss" scoped>
.teams{
  padding-top: 100px;
}
</style>
