import React from 'react';
/*
  one note here, this only works with createClass style, but if using 
  es6 class, can use shouldComponentUpdate. Can use this for more info too: 
  https://github.com/gaearon/react-pure-render
  overall, this only needed because we are using immutable, and redux, and we 
  are sure shallow comparison would be enough to detect state changes. 
*/
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux'

const myComponent = React.createClass({
  mixins: [PureRenderMixin],
  getData: function() {
    return this.props.data || [];
  },
  render: function() {
    return <div className="myComponent">
      {this.getData()}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    data: state.get('message')
  };
}

export const MyComponentContainer = connect(mapStateToProps)(myComponent);