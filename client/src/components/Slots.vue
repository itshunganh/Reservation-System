<template>
  <div class="slots">
    <div v-if="slots.length > 0" class="container">
      <div class="pb-5 text-center">
        <h1 class="display-2">RESERVATION LIST</h1>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>PHONE NUMBER</th>
            <th>DATE</th>
            <th>TIME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="slot in slots" :key="slot">
            <td>{{ slot.fname }}</td>
            <td>{{ slot.lname }}</td>
            <td>{{ slot.phone }}</td>
            <td>{{ slot.date }}</td>
            <td>{{ slot.time }}</td>
            <td>
                <router-link class="d-inline p-2 btn btn-warning btn-sm btn-block" v-bind:to="{ name: 'updateslot', params: { id: slot._id } }"><img src="../assets/update.svg"></router-link>
                &nbsp;
                <a class="d-inline p-2 btn btn-danger btn-sm btn-block" @click="deleteSlot(slot._id)"><img src="../assets/delete.svg"></a>
            </td>
          </tr>
        </tbody>
      </table>
      <br>
      <div class="row">
        <div class="col">
          <router-link class="btn btn-primary btn-sm btn-block" v-bind:to="{ name: 'addslot' }">RESERVE</router-link>
        </div>
        <div class="col">
          <router-link class="btn btn-secondary btn-sm btn-block" v-bind:to="{ name: 'guide' }">FAQs</router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container text-center py-5">
        <div class="card mb-3">
          <div class="card-body">
            <h2 class="card-title display-2 py-5">WELCOME TO <b>H.P</b> GYM RESERVATION SYSTEM</h2>
            <div class="row">
              <div class="col">
                <router-link class="btn btn-primary btn-sm btn-block" v-bind:to="{ name: 'addslot' }">RESERVE</router-link>
              </div>
              <div class="col">
                <router-link class="btn btn-secondary btn-sm btn-block" v-bind:to="{ name: 'guide' }">FAQS</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlotService from '@/services/SlotService'
export default {
  name: 'slots',
  data () {
    return {
      slots: []
    }
  },
  mounted () {
    this.getSlots()
  },
  methods: {
    async getSlots () {
      const response = await SlotService.fetchSlots()
      this.slots = response.data.slots
    },
    async deleteSlot (id) {
      const $this = this
      $this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, I changed my mind.'
      }).then(function(e) {
        if(e.value === true){
          SlotService.deleteSlot(id)
          $this.$router.go({ path: '/' })
        }else{
          e.dismiss;
        }
        e.preventDefault();
      })
    }
  }
}
</script>
<style>
</style>
