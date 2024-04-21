import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { bulaTypes, iPages } from '../../types/types';
import { getAllData } from '../../service/api';
import { ItemCard } from './components/ItemCard';

export const Dashboard = () => {
  const [data, setData] = useState<bulaTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [item, setItem] = useState('');
  const [pages, setPages] = useState<iPages>();

  useEffect(() => {
    async function fetchData() {
      if (!item) {
        const dataByCompany = await getAllData('', '', 1);
        setData(dataByCompany.data);
        setPages(dataByCompany);
      }
    }
    fetchData();
  }, []);

  const handleSearch = async (searchTerm: string, num: number = 1) => {
    setItem(searchTerm);
    try {
      const isCompanySearch = searchTerm.split(' ').length > 1;

      if (isCompanySearch) {
        const dataByCompany = await getAllData(undefined, searchTerm.toLocaleUpperCase(), num);
        setData(dataByCompany.data);
        setPages(dataByCompany);
      } else {
        const dataByName = await getAllData(searchTerm.toLocaleUpperCase(), undefined, num);
        setData(dataByName.data);
        setPages(dataByName);
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  function criarArrayDePaginas(pages: number | null | undefined) {
    let arrayDePaginas = [];
    if (pages) {
      for (var i = 1; i <= pages; i++) {
        arrayDePaginas.push(i);
      }
      return arrayDePaginas;
    }
  }

  return (
    <main className=' bg-blue-200 h-5/6 items-center p-10 gap-10 flex flex-col'>
      <SearchBar onSearch={(searchTerm) => handleSearch(searchTerm)} />
      <section className='h-5/6 md:w-2/6 w-96  flex flex-col gap-10 justify-between items-center'>
        <ItemCard data={data} />
        <div className='gap-4 flex'>
          {criarArrayDePaginas(pages?.pages)?.map((num, index) => {
            return (
              <button
                onClick={() => {
                  setCurrentPage(num), handleSearch(item, num);
                }}
                className={`${currentPage === num ? 'text-blue-600' : ''}`}
                key={index}
              >
                {num}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
};
