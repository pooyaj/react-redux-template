import React from 'react';

export default React.createClass({
  getData: function() {
    return this.props.data || [];
  },
  render: function() {
    return <div className="myComponent">
      {this.getData()}
    </div>;
  }
});
