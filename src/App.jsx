import { useState } from "react"
import { CardInicial } from "./components/CardInicial"
import { CardIFinal } from "./components/CardFinal"

export function App() {
  const [notaAvaliacao, setNotaAvaliacao] = useState(0)
  const [submited, setSubmited] = useState(false)

  return (
    submited === false ? (
        <CardInicial setNotaAvaliacao={setNotaAvaliacao} notaAvaliacao={notaAvaliacao} setSubmited={setSubmited}/>
      ) : (
        <CardIFinal notaAvaliacao={notaAvaliacao} />
      )
  )
}