export default {
    name: 'banner',
    title: 'Баннер',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Фото',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'buttonText',
            title: 'Текст кнопки',
            type: 'string',
        },
        {
            name: 'product',
            title: 'Товар',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Описание',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'Мелкий текст',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'Средний текст',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'Крупный текст 1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'Крупный текст 2',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Скидка',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'Время продаж',
            type: 'string',
        },
    ],
  };