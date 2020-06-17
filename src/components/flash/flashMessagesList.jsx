import React from 'react'
import FlashMessage from './flashMessages'
import { connect } from 'react-redux'
import { deleteFlashMessage } from '../../actions/flashMessage'

class flashMessageList extends React.Component {
  render() {

    const message = this.props.message.map(message => {
      return <FlashMessage key={ message.id } message={ message } deleteFlashMessage={ this.props.deleteFlashMessage }  />
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

export default connect(mapStateToProps, { deleteFlashMessage })(flashMessageList)