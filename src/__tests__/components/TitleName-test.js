import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import TitleName from '../../components/TitleName';

describe('Rendering component', () => {
  it('creates a TitleName component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <TitleName>
              NewTitle
            </TitleName>
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('NewTitle');
  });
});

describe('TitleName', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <TitleName>
            NewTitle
          </TitleName>
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
