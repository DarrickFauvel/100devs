const placeholders = {
  "Proposal Title": "HTML 5 App & Website",
  "Sender.FirstName": "Darrick",
  "Sender.LastName": "Fauvel",
  "Sender.Company": "Darrick Develops",
  "Sent.Date": new Date().toLocaleDateString(),
  "Client.FirstName": "Client Name",
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
