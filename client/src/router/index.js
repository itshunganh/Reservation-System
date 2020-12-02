import Vue from 'vue'
import Router from 'vue-router'
import Slots from '@/components/Slots'
import AddSlot from '@/components/AddSlot'
import UpdateSlot from '@/components/UpdateSlot'
import Guide from '@/components/Guide'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Slots,
      name: 'slots'
    },
    {
      path: '/slots/add',
      component: AddSlot,
      name: 'addslot'
    },
    {
      path: '/slots/:id/update',
      component: UpdateSlot,
      name: 'updateslot'
    },
    {
      path: '/slots/guide',
      component: Guide,
      name: 'guide'
    }
  ]
})
