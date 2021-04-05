import React, { useState} from   'react'
import './TesteComponent.css'

function TesteComponent(props: {name: string}) {

  const  [idade, setIdade] = useState(21)

  return <div className="TesteComponent">
      Teste de Componente Funcional! Olá { props.name }, { idade }!
      <button onClick = { () => {
        setIdade(idade + 1)
      }} > +
    </button>
    </div>
}
export default TesteComponent