import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../reducers/store';
import SessionDetail from '../../containers/SessionDetail';

describe('Rendering component', () => {
  it('creates a SessionDetail component', async () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SessionDetail match={{ params: { id: '2' } }} />
          </Provider>
        </BrowserRouter>,
      );
    });
    await waitFor(() => {
      expect(screen.getByText('LOADING'));
    });
  });
});

describe('SessionDetail', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <SessionDetail match={{ params: { id: '2' } }} />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
