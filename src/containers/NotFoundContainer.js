import React from 'react';
import NotFound from '../components/NotFound';
import { connect } from 'react-redux';
class MovieContainer extends React.Component {
  

  render() {
    const {  texts } = this.props;
    return (
      <div>
        <NotFound texts={texts} />
      </div>
    );
  }
}
const mapStateToProps = state => ({

  texts: state.texts
});


export default connect(
  mapStateToProps,
)(MovieContainer);
