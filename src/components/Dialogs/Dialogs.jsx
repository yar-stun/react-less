import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {

  let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messageElements = props.state.messages.map(m => <Message message={m.message} />);

    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogElements }
        </div>
        <div className={s.messages}>
            { messageElements }
        </div>
      </div>
    );
}

export default Dialogs;