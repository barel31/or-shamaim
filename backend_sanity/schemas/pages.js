export default {
    name: 'pages',
    title: 'Pages',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'route',
            title: 'Page route',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
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
};
