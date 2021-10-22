import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import rollingSVG from '../../assets/rolling.svg';
import Loading from '../../components/UI/Loading';

configure({ adapter: new Adapter() });
describe('<Loading />', () => {
  it('renders an image', () => {
    const rolling = shallow(<Loading />);

    expect(rolling.find('img').prop('src')).toEqual(rollingSVG);
  });
});
