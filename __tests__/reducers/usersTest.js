
import Users from '../../src/reducers/users';

describe('Users reducers', () => {
  it('should set user', () => {
    const user = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    };

    const initialState = {
      entities: {}
    };

    const expectedState = {
      entities: {
        1: user
      }
    }

    const action = { type: 'ADD_USER', payload: user };
    const state = Users(initialState, action);

    expect(state).toEqual(expectedState);
  })
})