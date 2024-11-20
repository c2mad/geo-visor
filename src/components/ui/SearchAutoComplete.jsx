import { useMemo, useRef, useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";
import proyects from "../../utils/proyects";

const AutocompleteItem = ({ id, name, onClick, onSelected }) => {
  const handleClick = () => {
    const valor = { id: id, name: name };
    onClick(valor);
    onSelected(valor);
  };
  return (
    <li key={id}>
      <button className="w-full p-4 hover:bg-gray-50" onClick={handleClick}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            className="h-6 w-6 text-rose-500 dark:text-rose-500"
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

export default function SearchAutoComplete(props) {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false,
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = (item) => {
    setSelectedItem(item); // Almacenar el elemento seleccionado en el estado
  };

  const listado_autores = proyects.reduce((accumulator, project) => {
    project.autores.forEach((source) => {
      // Comprobamos si la fuente ya existe en el acumulador
      const existingSource = accumulator.find((item) => item.id === source.id);
      if (!existingSource) {
        accumulator.push(source);
      }
    });
    return accumulator;
  }, []);
  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: "Ejemp. Leonardo",
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: "autores",
            getItems: ({ query }) => {
              if (!!query) {
                const resultados = listado_autores.filter((item) =>
                  item.name.toLowerCase().includes(query.toLowerCase()),
                );
                return resultados;
              }
              return [];
            },
          },
        ],
        ...props,
      }),
    [listado_autores, props],
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
    <form ref={formRef} className="mb-3 flex justify-center" {...formProps}>
      <div className="relative flex w-full rounded-lg border-none bg-gradient-to-tr from-rose-600 to-rose-300">
        <input
          ref={inputRef}
          className="w-full flex-1 rounded-lg p-2 pl-4 text-gray-900 focus:border-rose-500 focus:ring-rose-500 dark:bg-gray-700 dark:text-white"
          {...inputProps}
          value={selectedItem ? selectedItem.name : autocompleteState.query} // Usar el valor seleccionado si existe
          onChange={(e) => {
            if (selectedItem) {
              setSelectedItem(null); // Limpiar el estado de selectedItem si se modifica el input
            }
            inputProps.onChange(e); // Continuar con la lógica predeterminada del input
          }}
        />
        {autocompleteState.isOpen && (
          <div
            className="absolute left-0 top-full z-10 mt-2 w-full overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg focus:border-rose-500"
            ref={panelRef}
            {...autocomplete.getPanelProps()}
          >
            {autocompleteState.collections.map((collection, index) => {
              const { items } = collection;
              return (
                <section key={`section-${index}`}>
                  {items.length > 0 && (
                    <ul {...autocomplete.getListProps()}>
                      {items.map((item) => (
                        <AutocompleteItem
                          key={item.id}
                          {...item}
                          onClick={props.onClick}
                          onSelected={handleClick}
                        />
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
