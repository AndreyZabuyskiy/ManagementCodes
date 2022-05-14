import style from './CreateCode.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createCodeThunk } from '../../redux/Thunks/codesThunk';

const CreateCode = () => {
  const [textValue, setTextValue] = useState('');
  const [textName, setTextName] = useState('');

  const dispatch = useDispatch();

  const handleChangeValue = e => {
    setTextValue(e.target.value);
  }

  const handleChangeName = e => {
    setTextName(e.target.value);
  }

  const clickCreateButton = e => {
    const value = textValue;
    const name = textName;

    setTextName("");
    setTextValue("");

    dispatch(createCodeThunk({
      id: 0,
      value: value,
      name: name
    }));
  }

  return (
    <div>
      <div>
        <input className={style.input} type="number" placeholder="Value" value={textValue}
          onChange={handleChangeValue} />
      </div>
      <div>
        <input className={style.input} type="text" placeholder="Name" value={textName}
          onChange={handleChangeName} />
      </div>
      <div>
        <input className={style.button} type="button" value="Create" onClick={clickCreateButton} />
      </div>
    </div>
  );
}

export default CreateCode;