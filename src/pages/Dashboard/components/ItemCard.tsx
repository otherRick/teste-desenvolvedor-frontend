import { useState } from 'react';
import { bulaTypes } from '../../../types/types';

interface iItemCard {
  data: bulaTypes[];
}

export const ItemCard = ({ data }: iItemCard) => {
  const [itemIndex, setItemIndex] = useState<number | undefined>();
  return (
    <div className='flex bg-blue-100  flex-col overflow-auto gap-2 items-star w-full'>
      {data.map((item, index: number) => (
        <div
          key={item.id}
          onClick={() => {
            setItemIndex(index);
          }}
          className='bg-white p-2 rounded-md flex flex-col gap-6'
        >
          <article className='flex flex-col gap-1'>
            <div className='flex justify-between'>
              <h2>{item.name}</h2>
              <p className='text-xs'>{new Date(item.published_at).toLocaleDateString('pt-BR')}</p>
            </div>
            <p className='text-xs'>Laboratório</p>
            <p className='text-xs'>{item.company}</p>
          </article>
          <article className={` ${itemIndex !== index && 'hidden'} flex flex-col gap-2 text-xs`}>
            {item.documents.map((doc, index) => {
              return (
                <article key={index}>
                  <a target='_blank' className='flex gap-1 underline text-blue-600' href={doc.url}>
                    <p>Documento ao</p>
                    <p>{doc.type === 'PATIENT' ? 'paciente' : 'profissional'}</p>
                  </a>
                </article>
              );
            })}
            {item.active_principles.map((act, index) => {
              return (
                <article key={index} className='my-6'>
                  <p>Principais ativos:</p>
                  <p>{act.name}</p>
                </article>
              );
            })}
          </article>
        </div>
      ))}
    </div>
  );
};
