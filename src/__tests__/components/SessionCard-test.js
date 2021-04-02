import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import SessionCard from '../../components/SessionCard';

describe('Rendering component', () => {
  it('creates a SessionCard component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SessionCard
              date="01/01/01"
              title="New"
            />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('New');
  });
});

describe('SessionCard', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <SessionCard
            date="01/01/01"
            title="New"
          />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
