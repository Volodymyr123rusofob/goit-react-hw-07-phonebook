import style from './listContacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsList/contacts-operations';

const ListContacts = ({ items }) => {
  const dispatch = useDispatch();

  const elements = items.map(({ id, name, number }) => (
    <li key={id} className={style.list}>
      {name}: {number}
      <button
        className={style.btn}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={style.ullist}>{elements}</ul>;
};

export default ListContacts;
