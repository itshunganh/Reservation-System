import Api from '@/services/Api'

export default {
  fetchSlots () {
    return Api().get('slots')
  },

  addSlot (params) {
    return Api().post('add', params)
  },

  updateSlot (params) {
    return Api().put('slots/' + params.id, params)
  },

  getSlot (params) {
    return Api().get('slot/' + params.id)
  },

  deleteSlot (id) {
    return Api().delete('slots/' + id)
  }
}
