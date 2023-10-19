import { useMemo, useRef, useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";

const AutocompleteItem = ({ id, name }) => {
  return (
    <li>
      <button className="w-full p-4 hover:bg-gray-50">
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            className="h-6 w-6 text-rose-500 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z"
            />
          </svg>
          <p className="ml-2 text-start text-sm font-semibold">
            <span>{name}</span>
          </p>
        </div>
      </button>
    </li>
  );
};
// const AutocompleteItem = ({ id, title, img, price }) => {
//   return (
//     <li>
//       <Link href={`/detail/${id}`}>
//         <a className='hover:bg-blue-300 flex gap-4 p-4'>
//           <img src={img} alt={title} className='w-12 h-12 object-contain' />
//           <div>
//             <h3 className='text-sm font-semibold'>{title}</h3>
//             <p className='text-xs text-gray-600'>{price}</p>
//           </div>
//         </a>
//       </Link>
//     </li>
//   )
// }

export default function SearchAutoComplete(props) {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false,
  });

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: "Ejemp. Leonardo",
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: "autores",
            getItems: ({ query }) => {
              console.log(query);
              if (!!query) {
                const autores = [
                  {
                    id: 1,
                    name: "Dra. Sandra Cobos",
                  },
                  {
                    id: 2,
                    name: "Ing. Junior Leonardo Wachapa",
                  },
                  {
                    id: 2,
                    name: "Dr. Estefano Torrachi",
                  },
                ];
                const resultados = autores.filter((item) =>
                  item.name.toLowerCase().includes(query.toLowerCase())
                );
                return resultados;
              }
            },
          },
        ],
        // getSources: () => [{
        //   sourceId: 'offers-next-api',
        //   getItems: ({ query }) => {
        //     if (!!query) {
        //       return fetch(`/api/search?q=${query}`)
        //         .then(res => res.json())
        //     }
        //   }
        // }],
        ...props,
      }),
    [props]
  );

  const formRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current,
  });
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
  });

  return (
    <form ref={formRef} className="mb-20 flex justify-center" {...formProps}>
      <div className="relative flex w-full rounded-lg border-none bg-gradient-to-tr from-rose-600 to-rose-300">
        <input
          ref={inputRef}
          className="w-full flex-1 rounded-lg p-2 pl-4"
          {...inputProps}
        />
        {autocompleteState.isOpen && (
          <div
            className="absolute left-0 top-0 z-10 mt-16 w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg "
            ref={panelRef}
            {...autocomplete.getPanelProps()}
          >
            {autocompleteState.collections.map((collection, index) => {
              const { items } = collection;
              console.log({ items });
              return (
                <section key={`section-${index}`}>
                  {items.length > 0 && (
                    <ul {...autocomplete.getListProps()}>
                      {items.map((item) => (
                        <AutocompleteItem key={item.id} {...item} />
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </div>
    </form>
  );
}
