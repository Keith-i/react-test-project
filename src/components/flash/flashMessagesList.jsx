import React from 'react'
import FlashMessage from './flashMessages'
import { connect } from 'react-redux'

class flashMessageList extends React.Component {
  render() {

    const message = this.props.message.map(message => {
      return <FlashMessage key={ message.id } message={ message } />
    })

    return (
      <div className="container">
        { message }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.flashMessages
  }
}

export default connect(mapStateToProps)(flashMessageList)