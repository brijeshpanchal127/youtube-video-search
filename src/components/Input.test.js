import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Input} from './Input';

const mockStore = configureStore([]);

describe('<Input />', () => {

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
                <Input />
            </Provider>
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

});