export default {
    name: 'articles',
    title: 'Articles',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'route',
            title: 'Page route',
            type: 'string',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'bubble',
            title: 'Bubble',
            type: 'text',
        },
        {
            name: 'imageurl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotstop: true,
            },
        },
    ],
    validation: (Rule) => Rule.required(),
};
