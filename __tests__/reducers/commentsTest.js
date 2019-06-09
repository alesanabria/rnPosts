import Comments from '../../src/reducers/comments';

describe('Comments reducers', () => {
  it('should set post comments', () => {
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

    const initialState = {
      postComments: {}
    };

    const expectedState = {
      postComments: { 1: comments }
    };

    const action = { type: 'SET_POST_COMMENTS', payload: { postId: 1, comments: comments } };
    const state = Comments(initialState, action);
    expect(state).toEqual(expectedState);

  })
})