import { nanoid } from 'nanoid';
import style from './contactForm.module.css';
import { addContact } from '../../../redux/contactsList/contacts-operations';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const onAddContact = data => {
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
