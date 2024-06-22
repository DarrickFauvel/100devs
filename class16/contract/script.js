const placeholders = {
  "company name": "Darrick Fauvel",
  "customer name": "Client Name",
  "customer address": "123 Park Street, Boston, MA 01851",
  "Design and develop a web site": "Design and develop a website",
  "Payment details": "[Payment details]",
  "Payment schedule": "[Payment schedule]",
  number: "[number]",
  percentage: "[percentage]",
  date: new Date().toLocaleDateString(),
}

function replaceText(pattern, replacement) {
  const bodyHtml = document.body.innerHTML
  const newHtml = bodyHtml.replaceAll(
    pattern,
    `<span class="placeholder">${replacement}</span>`
  )
  document.body.innerHTML = newHtml
}

function replaceDocumentPlaceholders() {
  for (const [key, value] of Object.entries(placeholders)) {
    replaceText(`[${key}]`, value)
  }
}

replaceDocumentPlaceholders()
