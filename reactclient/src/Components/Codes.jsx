import { connect } from 'react-redux';

function Codes(props) {
  return (
    <div>Codes component</div>
  );
}

function mapStateToProps(state){
  const { codesReducer } = state;

  return {
    codes: codesReducer.codes
  }
}

export default connect(mapStateToProps)(Codes);