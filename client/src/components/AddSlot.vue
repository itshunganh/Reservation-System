<template>
  <div class="addslot container">
    <h1 class="display-3 mt-5">ADD</h1>
    <form class="py-3">
      <b>
        <div class="form-group">
          <label for="fname">First Name</label>
          <input type="text" class="form-control" name="fname" placeholder="Enter First Name" v-model="fname" required>
        </div>
        <div class="form-group">
          <label for="lname">Last Name</label>
          <input type="text" class="form-control" name="lname" placeholder="Enter Last Name" v-model="lname" required>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="number" class="form-control" name="phone" placeholder="Enter Phone Number" v-model="phone" required>
        </div>
        <div class="form-group">
          <label for="date">Date</label>
          <input type="date" class="form-control" name="date" v-model="date" required>
        </div>
        <div class="form-group">
          <label for="time">Time</label>
          <input type="time" class="form-control" name="time" v-model="time" required>
        </div>
        <div class="row">
          <div class="col">
            <button class="btn btn-primary btn-sm btn-block" @click="addSlot">SUBMIT</button>
          </div>
          <div class="col">
            <a class="btn btn-secondary btn-sm btn-block" href="/" role="button">RETURN</a>
          </div>
        </div>
      </b>
      
    </form>
  </div>
</template>

<script>
import SlotService from '@/services/SlotService'
export default {
  name: 'addslot',
  data () {
    return {
      fname: '',
      lname: '',
      phone: '',
      date: '',
      time: ''
    }
  },
  methods: {
    async addSlot () {
      await SlotService.addSlot({
      fname: this.fname,
      lname: this.lname,
      phone: this.phone,
      date: this.date,
      time: this.time
      })
      this.$swal(
        'Great!',
        `Your slot has been added!`,
        'success'
      )
      this.$router.push({ name: 'Slots' })
      this.$router.go({ path: '/' })
    }
  }
}
</script>
<style>
</style>

