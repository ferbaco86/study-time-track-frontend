import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import NavItem from '../../components/NavItem';

describe('Rendering component', () => {
  it('creates a NavItem component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NavItem
              icon="fas fa-plus"
              legend="test"
              path="/test/path"
            />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('test');
  });
});

describe('NavItem', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <NavItem
            icon="fas fa-plus"
            legend="test"
            path="/test/path"
          />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
