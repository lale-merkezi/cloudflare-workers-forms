const ContactAdminEmail = fields => {
  let items = []
  for (const key in fields) {
    items.push({
      label: key,
      item: fields[key],
    })
  }
  return {
    to: FORMS_ADMIN_CONTACT_TO,
    emailTemplateId: 'd-2d25f6acb85848e8a91916c0f7487566',
    emailTemplateData: {
      items,
      subject: 'New contact from lalemerkezi.com',
    },
  }
}

export default ContactAdminEmail
