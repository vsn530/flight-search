import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import SearchComp from '../components/SearchFlightsComp';

const mockStore = configureStore([]);

describe('Tests Connected Search Component with React-Redux ', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            searchData: {
                sourceCity: '',
                destCity: '',
                startDate: undefined,
                returnDate: undefined
            }
        });
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <SearchComp />
            </Provider>);

    });

    test('renders Search component correctly', () => {

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    

    it('should dispatch an action on button click', () => {
        renderer.act(() => {
            const e = {preventDefault:jest.fn()}
            let button = component.root.findByType('form').props.onSubmit(e)            
          });
          expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});


