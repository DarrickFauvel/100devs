const COMPANY_NAME = "Darrick Fauvel"
const CLIENT_NAME = "Client Name"
const CLIENT_ADDRESS = "123 Park Street, Boston, MA 01851"
const PROJECT_DELIVERABLE = "Design and develop a website"
const PAYMENT_DETAILS = "[Payment details]"
const PAYMENT_SCHEDULE = "[Payment schedule]"
const PAYMENT_NUMBER_OF_DAYS = "[number]"
const PERCENTAGE_RATE = "[percentage]"
// const DATE = "[date]"
const DATE = new Date().toLocaleDateString()

function replaceText(pattern, replacement) {
  let bodyHtml = document.body.innerHTML
  let newHtml = bodyHtml.replaceAll(pattern, `<em>${replacement}</em>`)
  document.body.innerHTML = newHtml
}

replaceText("[company name]", COMPANY_NAME)
replaceText("[customer name]", CLIENT_NAME)
replaceText("[customer address]", CLIENT_ADDRESS)
replaceText("[Design and develop a web site]", PROJECT_DELIVERABLE)
replaceText("[Payment details]", PAYMENT_DETAILS)
replaceText("[Payment schedule]", PAYMENT_SCHEDULE)
replaceText("[number]", PAYMENT_NUMBER_OF_DAYS)
replaceText("[percentage]", PERCENTAGE_RATE)
replaceText("[date]", DATE)
