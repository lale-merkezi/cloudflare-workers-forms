module.exports.default = {
  type: 'object',
  properties: {
    fname: {
      type: 'string',
      minLength: 2,
      maxLength: 50,
    },

    lname: {
      type: 'string',
      minLength: 2,
      maxLength: 50,
    },

    phone: {
      type: 'string',
      format: 'tel',
      maxLength: 200,
    },

    gdpr: {
      const: true,
    },
    lang: {
      enum: ['en', 'tr', 'ar'],
    },
  },
  required: ['fname', 'lname', 'phone', 'gdpr', 'lang'],
  additionalProperties: false,
}
