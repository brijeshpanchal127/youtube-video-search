import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore([]);

describe('<App />', () => {

    let store;
    let component;

    it('should render with initial state from Redux store', () => {
        store = mockStore({
            searchResults: [],
            refinedResults: [],
            refineText: "",
            onlyHD: false
        });
        component = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

});