import React from 'react'

class ClassComponent extends React.Component <{name : string}> {

  constructor(props: any) {
    super(props);
    console.log('constructor reached')
  }
  state = {
    name: 'Mundo'
  }


  componentDidMount() {
    console.log('DidMount reached')
  }

  componentDidUpdate() {
    console.log('DidUpdate reached')
  }
  render() {
    console.log('render reached')
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