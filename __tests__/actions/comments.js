import AsyncStorage from '../../__mocks__/@react-native-community/async-storage';
import { setupFetch } from '../../__mocks__/fetch';
import { getComments } from '../../src/actions/comments';

describe('Comments actions', () => {
  it('should get comments by post', async () => {
    const comments = [
      {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      }
    ];
    const dispatch = jest.fn();

    setupFetch(comments);

    await getComments(1)(dispatch);

    expect(AsyncStorage.getItem).toBeCalledWith(`post-1-comments`);
    expect(dispatch).toBeCalledWith({
      type: 'SET_POST_COMMENTS',
      payload: { postId: 1, comments: comments } });

  });
})