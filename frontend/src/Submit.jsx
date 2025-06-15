// Submit.jsx

export const SubmitButton = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <button
        type="submit"
        className="bg-purple-500 text-white font-medium py-2 px-6 rounded-full shadow-lg transition duration-300 cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
};
