import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCodesThunk } from '../../redux/Thunks/codesThunk';
import UpdateCodes from '../UpdateCodes/UpdateCodes';

function Codes(props) {
  const codes = useSelector(state => {
    const { codesReducer } = state;
    return codesReducer.codes;
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCodesThunk());
  }, []);

  const codesElements = codes.map(code =>
    <div>
      <span>{ code.value } { code.name }</span>
    </div>
  );

  return (
    <div>
      Codes component
      { codesElements }
    </div>
  );
}

export default Codes;