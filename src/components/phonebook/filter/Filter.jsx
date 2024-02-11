import style from './filter.module.css';
import ListContacts from '../listContacts/ListContacts';
import { useSelector } from 'react-redux';
import { selectListContacts } from '../../../redux/contactsList/selectors';
import { useDispatch } from 'react-redux';
import { selectFilterContact } from '../../../redux/contactsFilters/selectors';
import { filterContact } from '../../../redux/contactsFilters/filterSlice';
import { fetchContacts } from '../../../redux/contactsList/contacts-operations';
import { useEffect } from 'react';

const FilterContact = () => {
  const { items, isLoading, error } = useSelector(selectListContacts);
  const filter = useSelector(selectFilterContact);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const getFilteredContact = () => {
    if (!filter) return items;
    const normalizedFilter = filter.toLowerCase();
    const filteredContact = items.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
    return filteredContact;
  };

  const changeFilter = ({ target }) => {
    dispatch(filterContact(target.value));
  };

  const item = getFilteredContact();
  return (
    <>
      <input
        className={style.inp}
        onChange={changeFilter}
        name="filter"
        placeholder="Search"
      />
      {error && <p>{error}</p>}
      {isLoading && <p>...Loading</p>}
      {Boolean(items.length) && <ListContacts items={item} />}
    </>
  );
};

export default FilterContact;
