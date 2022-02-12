import Emitter from '@/components/ui/cInput.vue'
import{ mount } from '@vue/test-utils'

describe('Input component', () => {
	it("input emitter", () => {
		const wrapper = mount(Emitter)
		const input = wrapper.find('input[data-testid="input"]')
		
		input.setValue('test')
		expect(wrapper.emitted().doSearch[0][0]).toEqual('test')
	})
})