import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import FormButton from '../../components/FormButton';

describe('Rendering component', () => {
  it('creates a FormButton component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FormButton>
              Add
            </FormButton>
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Add');
  });
});

describe('FormButton', () => {
  it('renders correctly', () => {
    const snap = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <FormButton>
            Add
          </FormButton>
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
