import ContactForm from './phonebook/form/ContactForm';
import FilterContact from './phonebook/filter/Filter';

import style from './app.module.css';

const App = () => {
  return (
    <div className={style.box}>
      <div className={style.boxdiv}>
        <h1>Phonebook</h1>
        <ContactForm />
        <div className={style.div}>
          <h2 className={style.h2}>Contacts</h2>
          <FilterContact />
        </div>
      </div>
    </div>
  );
};

export default App;
