import { useState } from 'react';

interface iSearchBar {
  onSearch: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: iSearchBar) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='md:w-2/6 w-5/6 flex justify-between gap-2'>
      <input
        type='text'
        value={searchTerm}
        className='p-2 rounded-md w-full'
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Digite o termo de pesquisa...'
      />
      <button className='p-2 rounded-md bg-gray-400' onClick={() => onSearch(searchTerm)}>
        Pesquisar
      </button>
    </div>
  );
};

export default SearchBar;
