import {
  render, screen, act, waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import UserDetail from '../../containers/UserDetail';

const store = createStore(() => ({
  user: {
    user: {
      id: 1,
      username: 'ferbaco',
      sessions: [
        {
          id: 1,
          user_id: 1,
          title: 'Pelusa',
          created_at: '2021-04-01T00:50:52.332Z',
          total_time: null,
        },
        {
          id: 2,
          user_id: 1,
          title: 'React',
          created_at: '2021-04-01T00:53:27.290Z',
          total_time: null,
        },
        {
          id: 4,
          user_id: 1,
          title: 'C#',
          created_at: '2021-04-01T00:58:29.552Z',
          total_time: null,
        },
      ],
    },
  },
}),
applyMiddleware(thunk));

describe('Rendering component', () => {
  it('creates a UserDetail component', async () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserDetail />
          </Provider>
        </BrowserRouter>,
      );
    });
    await waitFor(() => {
      expect(screen.getByText('ferbaco'));
    });
  });
});
