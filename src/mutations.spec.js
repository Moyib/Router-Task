import { mount } from '@vue/test-utils'
import mutations from './mutations'


describe('Mutations', () => {
    const wrapper = mount(mutations)
    it('"increment" increments "state.count" by 1', () => {
        const state = {
            count: 0
        }
       mutations.increment(state) 
       expect(wrapper.state.count()).toBe(1)
    })
})

/* import mutations from './mutations'

test('"increment" increments "state.count" by 1', () => {
    const state = {
        count: 0
    }
    mutations.increment(state)
    expect(state.count).toBe(1)
}) */