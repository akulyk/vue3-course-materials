import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import UiInput from '@/components/UiInput';

// test('UiInput should be defined', () => {
//   expect(UiInput).toBeDefined();
// });

describe('UiInput', () => {
  it('should be defined', () => {
    expect(UiInput).toBeDefined();
  });

  // Не очень полезный тест. Просто для примера
  it('should render input.input-group inside .form-control', async () => {
    const wrapper = mount(UiInput);
    const inputGroup = wrapper.find('.input-group');
    const formControl = inputGroup.find('input.form-control');
    expect(inputGroup.exists()).toBe(true);
    expect(formControl.exists()).toBe(true);
  });

  // Вместо проверок на классы можно использовать снапшоты
  it('should not have .form-control_rounded on input by default', async () => {
    const wrapper = mount(UiInput);
    expect(wrapper.get('input').classes('form-control_rounded')).toBe(false);
  });

  // Вместо проверок на классы можно использовать снапшоты
  it('should have .form-control_rounded on input with rounded prop', async () => {
    const wrapper = mount(UiInput, { props: { rounded: true } });
    expect(wrapper.get('input').classes('form-control_rounded')).toBe(true);
  });

  // Вместо проверок на классы можно использовать снапшоты
  it('should toggle .form-control_rounded on input when rounded changes', async () => {
    const wrapper = mount(UiInput);
    const input = wrapper.get('input');
    expect(input.classes('form-control_rounded')).toBe(false);

    await wrapper.setProps({ rounded: true });
    // await nextTick();
    expect(input.classes('form-control_rounded')).toBe(true);
  });

  it('should set input value from modelValue', async () => {
    const value = 'TEST_VALUE';
    const wrapper = mount(UiInput, { props: { modelValue: value } });
    const inputWrapper = wrapper.get('input');
    const input = inputWrapper.element;
    expect(input.value).toBe(value);
  });

  it.each(['password', 'num', 'range', 'date', 'time', 'email', 'tel'])('should render input type=(%s)', (type) => {
    const wrapper = mount(UiInput, { attrs: { type } });
    expect(wrapper.get('input').attributes('type')).toBe(type);
  });

  it('should emit update:modelValue with inputted value on input', async () => {
    const value = 'TEST_VALUE';
    const wrapper = mount(UiInput);
    // wrapper.get('input').element.value = value;
    // await wrapper.get('input').trigger('input');
    await wrapper.get('input').setValue(value);

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([value]);
  });

  it('should handle input event when input listener is set', async () => {
    const value = 'TEST_VALUE';
    const handler = jest.fn();
    const wrapper = mount(UiInput, {
      attrs: {
        onInput: (event) => handler(event.target.value),
      },
    });

    await wrapper.get('input').setValue(value);
    await wrapper.get('input').trigger('change');

    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenCalledWith(value);
  });

  it('should match snapshot', async () => {
    const wrapper = mount(UiInput);
    // .__app._container - костыль из Issue для Vue 3
    // https://github.com/eddyerburgh/jest-serializer-vue/issues/49
    // Пока не видел версии, в которой работает нормально
    expect(wrapper.__app._container).toMatchSnapshot();
  });
});
