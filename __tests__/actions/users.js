import AsyncStorage from '../../__mocks__/@react-native-community/async-storage'
import { setupFetch } from '../../__mocks__/fetch'
import { getUser } from '../../src/actions/users'

describe('Users actions', () => {
  it('should get user by id and stored', async () => {
    const user = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    }

    const userStr = JSON.stringify(user)
    const dispatch = jest.fn()

    setupFetch(user)

    await getUser(user.id)(dispatch)

    expect(AsyncStorage.getItem).toBeCalledWith('user-1')
    expect(dispatch).toBeCalledWith({ type: 'ADD_USER', payload: user })
    expect(AsyncStorage.setItem).toBeCalledWith('user-1', userStr)
  })
})
