function PromptOutput() {
  return (
    <section className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4">
        Optimized Prompt
      </h2>

      <div className="border-2 border-gray-300 rounded-lg p-5 min-h-[180px]">
        Your optimized prompt will appear here...
      </div>

      <div className="mt-5">
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          📋 Copy Prompt
        </button>
      </div>
    </section>
  );
}

export default PromptOutput;