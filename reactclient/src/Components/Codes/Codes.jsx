import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCodesThunk } from '../../redux/Thunks/codesThunk';
import style from './Codes.module.css';

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
      <span className={style.text}>{ code.value } { code.name }</span>
    </div>
  );

  return (
    <div>
      { codesElements }
    </div>
  );
}

export default Codes;