import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Dimych' },
    {id: 2, name: 'Tolya' },
    {id: 3, name: 'Katya' },
    {id: 4, name: 'Gorik' },
    {id: 5, name: 'Petya' }
  ];

  let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogElements }
        </div>
        <div className={s.messages}>
          <Message message="fdgdfgfdg"/>
          <Message message="fdgfdghfgdfgfdg"/>
          <Message message="233ewdsad"/>
          <Message message="rdgf433"/>
        </div>
      </div>
    );
}

export default Dialogs;