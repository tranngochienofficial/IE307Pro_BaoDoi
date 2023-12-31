export const datas = [
    {   url: require('../assets/1.mp4'), 
        like: 10, 
        comments: [
        {
            id: 1,
            text: 'This is a great post!',
            author: 'User1',
            timestamp: '2023-01-01T12:00:00Z',
        },
        {
            id: 2,
            text: 'I have a question about this topic.',
            author: 'User2',
            timestamp: '2023-01-02T08:30:00Z',
        },
        {
            id: 3,
            text: 'Thanks for sharing!',
            author: 'User3',
            timestamp: '2023-01-03T15:45:00Z',
        },], 
        share: 30, 
        title: 'Video 1 title'},
    { url: require('../assets/2.mp4'), like: 100, comment: 50, share: 30, title: 'Video 2 title'},
    { url: require('../assets/3.mp4'), like: 1000, comment: 50, share: 30, title: 'Video 3 title'},
    { url: require('../assets/4.mp4'), like: 10000, comment: 50, share: 300, title: 'Video 4 title'},

    // Add more videos as needed
  ];