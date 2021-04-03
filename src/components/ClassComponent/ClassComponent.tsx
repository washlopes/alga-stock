import React from 'react'

class ClassComponent extends React.Component <{name : string}> {
  state = {
    name: 'Mundo'
  }

  render() {
    return <div>
        <p>Olá, eu sou {this.state.name}</p>
        <button onClick= {
          () => {
            this.setState( { name : 'Washington'})
          }
        }
        >Clique aqui</button>
      </div>
  }
}

export default ClassComponent