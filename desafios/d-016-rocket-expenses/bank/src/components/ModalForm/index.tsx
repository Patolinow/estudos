export const ModalForm = (): JSX.Element => {
  const submitHandler = () => {};
  return (
    <form
      className=" text-white w-11/12 max-w-lg h-[33rem] fixed bg-dark-gray z-30 bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 py-10 px-12  rounded-md max-md:bottom-0 max-md:translate-y-0 max-md:rounded-t-3xl max-md:w-full"
      onSubmit={submitHandler}
    >
      <fieldset className="flex flex-col">
        <legend className="text-2xl mb-8 font-bold">Nova transação</legend>

        <input
          type="text"
          name="descricao"
          id="descricao"
          placeholder="Descrição"
          className="text-white bg-black p-4 rounded-md placeholder:text-gray"
        />

        <input
          type="number"
          name="valor"
          id="valor"
          placeholder="Valor (15,90 => 1590)"
          className="my-4 text-white bg-black p-4 rounded-md placeholder:text-gray"
        />

        <input
          type="text"
          name="categoria"
          id="categoria"
          placeholder="Categoria"
          className="text-white bg-black p-4 rounded-md placeholder:text-gray"
        />

        <fieldset className="mt-6 mb-10">
          <input type="radio" name="type" id="income" />
          <input type="radio" name="type" id="outcome" />
        </fieldset>

        <button type="submit" className="p-4 bg-light-green rounded-md hover:bg-dark-green duration-300">
          Cadastrar
        </button>
      </fieldset>
    </form>
  );
};
