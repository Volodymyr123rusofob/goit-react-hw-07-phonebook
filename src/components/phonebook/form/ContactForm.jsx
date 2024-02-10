import { nanoid } from 'nanoid';
import style from './contactForm.module.css';
import { addContact } from '../../../redux/contactsList/contactSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getListContacts } from '../../../redux/contactsList/selectors';

const ContactForm = () => {
  const contacts = useSelector(getListContacts);
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const isDublicate = ({ name }) => {
    const normalizedName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedCurrentName === normalizedName;
    });
    return Boolean(dublicate);
  };

  const onAddContact = data => {
    if (isDublicate(data)) {
      return alert(`Contact ${data.name} already in list`);
    }
    dispatch(addContact(data));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const newContact = { name: name.value, number: number.value };
    onAddContact(newContact);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form} action="">
      <label htmlFor={nameId}>Name</label>
      <input
        id={nameId}
        className={style.inp}
        type="text"
        name="name"
        required
      />
      <label htmlFor={numberId}>Number</label>
      <input
        id={numberId}
        className={style.inp}
        type="tel"
        name="number"
        required
      />
      <button className={style.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
