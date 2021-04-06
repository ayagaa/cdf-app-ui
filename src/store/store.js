import application from './reducers/applicationReducer';

export default function createStore() {
    return {
        application: application()
    }
}