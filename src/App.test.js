import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';
import { init } from '@rematch/core';
import * as models from './models';
import { Provider } from 'react-redux';

const store = init({
    models,
});
const app = render(
    <Provider store={store}>
        <App />
    </Provider>
);
test('renders menu link HOME', async () => {
    const { getByText } = app;
    const linkElement = await waitForElement(() => getByText(/HOME/i));
    expect(linkElement).toBeInTheDocument();
});