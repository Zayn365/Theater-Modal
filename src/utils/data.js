export const data = {
    id: 1, 
    name: "Barry Greyman SR",
    image: 'img/img1.jpg',
    diedOn: '2023-1-1',
    birthDay: '1960-2-2',
    memories: [{
        id: 0,
        name: "Barry Greyman JR",
        relation: "Son",
        image: `${process.env.PUBLIC_URL + 'img/img2.png'}`,
        message: "The quick brown fox jumps over the lazy dog. This is a sample sentence to demonstrate 150 letters. It contains spaces and punctuation, which are also counted in the total. This sentence is a bit longer than 150 characters, but it should give you a good idea of the length."
    },{
        id: 1,
        name: "Dana Greyman",
        relation: "Son",
        image: `${process.env.PUBLIC_URL + 'img/img3.png'}`,
        message: "Barry Greyman Sr. brought so much joy and laughter into our lives. His passing leaves a void that can never be filled. May he rest in peace, knowing he was loved and cherished by all who knew him."
    },{
        id: 2,
        name: "Jerry Greyman",
        relation: "Brother",
        image: `${process.env.PUBLIC_URL + 'img/img2.png'}`,
        message: "Barry Greyman Sr. was a true pillar of strength and wisdom. His guidance and love were a blessing to all who knew him. Though he is no longer with us, his spirit will continue to inspire us every day."
    }]
};