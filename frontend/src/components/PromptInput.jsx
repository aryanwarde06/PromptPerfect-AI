function PromptInput() {
  return (
    <section className="max-w-4xl mx-auto mt-10 px-4">
      <textarea
        className="w-full h-40 border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:border-blue-500"
        placeholder="Enter your prompt here..."
      ></textarea>

      <div className="text-center mt-5">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
          ✨ Optimize Prompt
        </button>
      </div>
    </section>
  );
}

export default PromptInput;