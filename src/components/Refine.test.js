import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Refine from './Refine';

const mockStore = configureStore([]);

describe('<Refine />', () => {

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
                <Refine />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

});