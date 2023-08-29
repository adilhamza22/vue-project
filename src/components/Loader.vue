<template>
  <div id="spinner-loading">
    <!-- <div class="text-center">
            <b>Fetching Data. . . </b>
            <b-spinner variant="" label="Text Centered" style=";background-color: rgb(73, 164, 206);"></b-spinner>
        </div> -->
    <b-button variant="primary" disabled>
      <b-spinner small type="grow"></b-spinner>
      Loading...
    </b-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
