import { FaXmark } from "react-icons/fa6";
import { useModal } from "../../hooks";
import { RiErrorWarningLine } from "react-icons/ri";



const ConfirmDeleted = ({ id, deleteFunc, name }) => {
  const { closeModal } = useModal();

  const handleDelete = () => {
      deleteFunc(id, {
      onSuccess: () => closeModal(),
      
    });
  };

  return (
    <div className="relative w-1/2 rounded-sm bg-[var(--color-primary)] p-5 text-center shadow-2xl">
      <button
        onClick={closeModal}
        className="absolute top-5 right-5 ms-auto flex-center h-8 w-8 cursor-pointer rounded-lg bg-transparent text-sm text-gray-400 hover:text-gray-700"
        type="button"
      >
        <FaXmark />
      </button>
      <div className="w-full pt-5 text-[var(--color-text)]">
        <RiErrorWarningLine className="m-auto" size={50} />
      </div>
      <h3 className="border-b-1 border-[var(--color-text)] py-10 text-xl font-semibold text-[var(--color-text)]">
        Are you sure you want to delete this {name}?
      </h3>
      <div className="pt-5">
        <button
          onClick={handleDelete}
          className=" cursor-pointer rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700"
          type="button "
        >
          Yes, I'm sure
        </button>
        <button
          onClick={closeModal}
          className="ms-3 cursor-pointer rounded-lg bg-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-300 hover:text-gray-700"
          type="button"
        >
          No, cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleted;
