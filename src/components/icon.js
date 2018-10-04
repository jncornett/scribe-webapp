import React from "react"

import "@fortawesome/fontawesome-free/css/all.css"

export default function Icon({ name }) {
  return <span className={`fas fa-${name}`} />
}
