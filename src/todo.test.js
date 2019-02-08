import React from 'react';
import { shallow, mount} from 'enzyme';
import {TodoList} from './todoList';



describe('<TodoList />', () => {
    it('should remove when click to a', () => {
        const props = {
            todos: [{ id: 1, text: 'aaa' }],
            handleRemove: jest.fn()
        }
        const wrapper = shallow(<TodoList {...props} />);
        wrapper.find('a').simulate('click');
        expect(props.handleRemove).toHaveBeenCalledWith(1);
    })

})