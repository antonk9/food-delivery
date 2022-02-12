import Emitter from '@/components/ui/cButton.vue'
import{ mount } from '@vue/test-utils'

describe('Button component', () => {
	it("button emitter", () => {
		const wrapper = mount(Emitter)
		const button = wrapper.find('button[data-testid="button"]')
		
		button.trigger('click')
		expect(wrapper.emitted()).toHaveProperty('doClick')
	})
})