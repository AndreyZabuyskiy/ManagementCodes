import style from './UpdateCode.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeCodeThunk } from '../../redux/Thunks/codesThunk';

const UpdateCode = () => {
  const [textId, setTextId] = useState('');
  const [textValue, setTextValue] = useState('');
  const [textName, setTextName] = useState('');

  const dispatch = useDispatch();

  const handleChangeId = e => {
    setTextId(e.target.value);
  }

  const handleChangeValue = e => {
    setTextValue(e.target.value);
  }

  const handleChangeName = e => {
    setTextName(e.target.value);
  }

  const clickButtonChange = e => {
    const id = textId;
    const value = textValue;
    const name = textName;

    setTextId("");
    setTextName("");
    setTextValue("");

    dispatch(changeCodeThunk({
      id: id,
      name: name,
      value: value
    }));
  }

  return (
  <div>
    <div>
      <input className={style.input} type="number" placeholder="Id" onChange={handleChangeId} />
    </div>
    <div>
      <input className={style.input} type="number" placeholder="Value" onChange={handleChangeValue} />
    </div>
    <div>
      <input className={style.input} type="text" placeholder="Name" onChange={handleChangeName} />
    </div>
    <div>
      <input className={style.button} type="button" value="Change" onClick={clickButtonChange} />
    </div>
  </div>
  );
}

export default UpdateCode;