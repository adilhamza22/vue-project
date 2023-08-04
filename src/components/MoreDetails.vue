<template>
  <div>
    <b-modal id="modal-1" class="modal responsive" title="Residential Details">
      <div class="d-flex justify-content-between">
        <div class="inner-div-modal card-title card-avatar">
          <img src="../assets/avatar.jpeg" />
        </div>

        <div class="inner-div-modal">
          <p class="my-4 d-flex justify-content-between">
            <span>City:</span> {{ data.city }}
          </p>
          <p class="my-4 d-flex justify-content-between">
            <span>ZipCode:</span> {{ data.zipcode }}
          </p>
          <p class="my-4 d-flex justify-content-between">
            <span>Street:</span> {{ data.street }}
          </p>
          <p class="my-4 d-flex justify-content-between">
            <span>Suite:</span>{{ data.suite }}
          </p>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
// import avatar from '@/assets/avatar.jpeg'
export default {
  name: "moreDetails",
  props: {
    data: {
      type: Object,
    },
  },
};
</script>
<style>
#modal-1 {
  display: block;
  width: 40%;
  height: 70%;
  left: 32%;
  top: 15%;
  overflow-y: hidden;
}
.card-avatar {
  border-right: 1px solid rgb(223, 217, 217);
}

#modal-1 span {
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: larger;
}
</style>
