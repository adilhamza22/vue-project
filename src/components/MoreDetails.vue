<template>
  <div>
    <b-modal id="modal-1" class="modal responsive" title="Address Details">
          <p class="my-4"> <h3>City:</h3> {{ data.city }}</p>
          <p class="my-4"> <h3>ZipCode:</h3> {{ data.zipcode }}</p>
          <p class="my-4"> <h3>Street:</h3> {{ data.street }}</p>
          <p class="my-4"> <h3>Suite:</h3> {{ data.suite }}</p>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "moreDetails",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>
<style></style>
