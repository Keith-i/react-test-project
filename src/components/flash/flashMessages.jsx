import React from 'react'
import classnames from 'classnames'

class flashMessage extends React.Component {
  render() {
    /**
     * type: 提示的类型
     * text：文本
     */
    const { type, text } = this.props.message
    return(
      <div className={ classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger' :type === 'danger'
      }) }>
        { text }
      </div>
    )
  }
}

export default flashMessage