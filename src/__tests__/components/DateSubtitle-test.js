import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import DateSubtitle from '../../components/DateSubtitle';

describe('Rendering component', () => {
  it('creates a DateSubtitle component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <DateSubtitle>
              12/21/21
            </DateSubtitle>
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('12/21/21');
  });
});

describe('DateSubtitle', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <DateSubtitle>
            12/21/21
          </DateSubtitle>
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
