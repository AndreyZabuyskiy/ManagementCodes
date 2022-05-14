import style from './UpdateCode.module.css';

const UpdateCode = () => {
  return (
  <div>
    <div>
      <input className={style.input} type="text" placeholder="Id" />
    </div>
    <div>
      <input className={style.input} type="text" placeholder="Value" />
    </div>
    <div>
      <input className={style.input} type="text" placeholder="Name" />
    </div>
    <div>
      <input className={style.button} type="button" value="Change" />
    </div>
  </div>
  );
}

export default UpdateCode;