import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FC, FormEvent } from 'react';

import { IoMdNotifications } from 'react-icons/io';
const notify = () =>
  toast('Please enter search term!', {
    icon: <IoMdNotifications />,
    style: {
      borderRadius: '10px',
      background: 'red',
      color: '#fff',
    },
  });
interface SearchBarProps {
  onQuery: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SearchBar: FC<SearchBarProps> = ({ onQuery, setPage }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget as HTMLFormElement;
    const query = (form.elements.namedItem('image') as HTMLInputElement)?.value;
    if (!query || query.trim() === '') {
      notify();
      return;
    }
    onQuery(query);
    setPage(1);
    form.reset();
  };

  return (
    <>
      <header className={css.search_bar_header}>
        <form onSubmit={handleSubmit} className={css.search_bar_form}>
          <input
            className={css.search_bar_input}
            name="image"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos..."
          />
          <button className={css.search_bar_button} type="submit">
            Search
          </button>
          <Toaster position="bottom-center" reverseOrder={false} />
        </form>
      </header>
    </>
  );
};
export default SearchBar;
