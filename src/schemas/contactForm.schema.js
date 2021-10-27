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
  },
  required: ['fname', 'lname', 'phone', 'gdpr'],
  additionalProperties: false,
}
