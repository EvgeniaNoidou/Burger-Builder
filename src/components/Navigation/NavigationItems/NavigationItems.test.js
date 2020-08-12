import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });
describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render two <NavigationItem /> elements if not authenticated', () => {
        //no jsx in the find method
        expect(wrapper.find(NavigationItem)).toHaveLength(2);

    });

    it('should render three <NavigationItem /> elements if authenticated', () => {
        //1st way to set the isAuthenticated 
        //wrapper = shallow(<NavigationItems isAuthenticated />);
        //2n way of setting the props
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);

    });

    it('should render logout link if authenticated', () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);

    });
})