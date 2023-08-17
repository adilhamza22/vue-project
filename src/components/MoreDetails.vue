<template>
  <div>
    <b-modal id="modal-1" class="modal responsive more-details-modal" title="Residential Details">
      <div class="d-flex justify-content-around modal-details" style=" flex-wrap: wrap;">
        <div class="inner-div-modal card-title card-avatar inner-div-modal-avatar" >
          <img src="../assets/avatar.jpeg" />
        </div>

        <div class="inner-div-modal">
          <p class="my-4 d-flex justify-content-between">
            <span>City:</span> <span>{{ data.city }}</span>
          </p>
          <p class="my-4 d-flex justify-content-between">
            <span>ZipCode:</span> <span>{{ data.zipcode }}</span>
          </p>
          <p class="my-4 d-flex justify-content-between">
            <span>Street:</span> <span>{{ data.street }}</span>
          </p>
          <p class="my-4 d-flex justify-content-between">
            <span>Suite:</span><span> {{ data.suite }}</span>
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
<style >
#modal-1 {
  display: block;
    width: 55vw;
    height: 90vh;
    left: 32%;
    top: 25%;
    overflow-y: scroll;
}
.inner-div-modal span{
  font-weight: lighter  !important;
  font-family: serif  !important;
    font-size: small  !important;
}
#modal-1 div:first-child {
  max-width: 100%;

}
/* .modal-details{
  left: 10%;
} */
@media only screen and (max-width:992px){
 
  #modal-1 div:first-child {
    max-width: 80%;
  }
  .modal-details{
    position: inherit;
  }
}
@media only screen and (max-width:768px){
  #modal-1{
    display: block;
    width: 80vw;
    height: 90vh;
    left: 15%;
    /* top: 5%; */
    top: 25%;

    overflow-y: scroll;
  }
  .inner-div-modal .card-avatar{
    width: 100%!important;
    display: flex !important;;
    justify-content: center;
  }
  /* #modal-1 {
  display: block;
  width: 60vw;
  height: 70vh;
  left: 20%;
  top: 15%;
  overflow-y: hidden;
} */
}
 #modal-1 div:first-child {
   max-width: 100%;
 }

@media only screen and ( max-width:425px) {
  #modal-1{
    top: 5%;
    height: 92vh;

  }
  .modal-body{
         padding: 1%!important;
  }
  .modal-footer {
    padding: 1%!important;
  }
  .inner-div-modal{
    width: 100%!important;
  }
  .inner-div-modal-avatar{
    display: flex !important;
    justify-content: center;
  }
  .inner-div-modal-avatar img{
    width: 70%!important;
  }
}
/* .more-details-modal{
  width: 60vw;
  height: 40vh;
} */
/* .more-details-modal .modal-dialog{
  margin:0;
  max-width: 800px !important;
  /* max-width: 500px; 
} */
/* .more-details-modal .modal-content{
  width: 55vw!important;
} */
.card-avatar {
  border-right: 1px solid rgb(223, 217, 217);
}

#modal-1 span {
  font-weight: bold;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: larger;
}
</style>
