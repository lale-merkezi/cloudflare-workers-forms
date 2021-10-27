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
    emailTemplateId: 'd-10af7e1823664898aad662d0f641ab74',
    emailTemplateData: {
      items,
      subject: 'New contact from lalemerkezi.com',
    },
  }
}

export default ContactAdminEmail
