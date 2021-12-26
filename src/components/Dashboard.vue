<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Dashboard Page</h5>
        <p>
          Use this page to start from scratch and place your custom content.
        </p>
      </div>
    </div>
    <Dialog header="Header" v-model:visible="display"> Content </Dialog>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      display: false,
    };
  },
  mounted() {
    this.$toast.add({severity:'info', summary: 'Success Message', detail:'Order submitted', life: 3000});
    }
};
</script>

<style scoped></style>
