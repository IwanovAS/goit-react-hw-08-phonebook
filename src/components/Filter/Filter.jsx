import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/conttacts/contactsSlice';
import css from './Filter.module.css'
import { selectFilter } from 'redux/conttacts/contactsSelector';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
      className={css.filterInput}
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Enter name for Search"
      />
    </label>
  );
}

export default Filter;
