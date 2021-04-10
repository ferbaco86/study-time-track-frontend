import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import ProgressCard from '../../components/ProgressCard';

describe('Rendering component', () => {
  it('creates a ProgressCard component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ProgressCard
              date="01/01/01"
              name="test"
              time={10}
            />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('10');
  });
});

describe('ProgressCard', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <ProgressCard
            date="01/01/01"
            name="test"
            time={10}
          />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
