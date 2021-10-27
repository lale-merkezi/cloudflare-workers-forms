import { JsonResponse, isAllowedOrigin, corsHeaders } from './lib/helpers'

import { Router } from 'itty-router'
import validate from './middleware/validate'
import sheets from './middleware/sheets'
import email from './middleware/email'

import contactValidate from './scripts/contactForm.validate'

import ContactAdminEmail from './emails/contact.admin'

const router = Router({ base: '/forms' })

router.post(
  '/contact',
  validate(contactValidate),
  // sheets(GOOGLE_SHEET_CONTACT_ID),
  email(ContactAdminEmail),
  req => JsonResponse({ message: 'sent' }, 200, req),
)
router.all('*', req => JsonResponse({ message: 'Not Found.' }, 404, req))

addEventListener('fetch', event => {
  const allowed = isAllowedOrigin(event.request)
  if (!allowed) {
    return event.respondWith(
      new Response(JSON.stringify('Unauthorized'), {
        status: 401,
        headers: {
          'content-type': 'application/json',
          ...corsHeaders('https://lalemerkezi.com'),
        },
      }),
    )
  }

  return event.respondWith(router.handle(event.request))
})
