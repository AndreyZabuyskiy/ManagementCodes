import style from './CreateCode.module.css';

const CreateCode = () => {
  return (
    <div>
      <div>
        <input className={style.input} type="text" placeholder="Value" />
      </div>
      <div>
        <input className={style.input} type="text" placeholder="Name" />
      </div>
      <div>
        <input className={style.button} type="button" value="Create" />
      </div>
    </div>
  );
}

export default CreateCode;