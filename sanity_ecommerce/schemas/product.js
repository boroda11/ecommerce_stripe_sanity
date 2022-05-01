export default {
    name: 'product',
    title: 'Товар',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Фото товара',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Название товара',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Тег',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Цена',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Описание',
        type: 'string',
      }
    ]
  }