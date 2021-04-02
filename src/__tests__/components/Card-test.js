import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import Card from '../../components/Card';

describe('Rendering component', () => {
  it('creates a Card component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Card
              title="Test"
              time={5}
            />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Test');
  });
});

describe('Card', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Card
            title="Test"
            time={5}
          />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
