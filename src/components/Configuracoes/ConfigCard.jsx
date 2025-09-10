export default function ConfigCard({ title, description, items }) {
  return (
    <section className="bg-white font-(family-name:--font-inter) md:border-gray-400 md:border-1 w-full px-6 sm:py-6 md:p-10 py-4 rounded-lg flex flex-col">
      <h2 className="text-2xl font-semibold text-center md:text-left sm:text-3xl">{title}</h2>
      {description && (
        <h3 className="text-purple-950 md:border-b-1 md:border-gray-200 md:pb-2 md:text-gray-600 md:font-normal md:text-base md:text-left font-medium text-center sm:text-xl mb-5 md:mb-3 sm:mb-7">
          {description}
        </h3>
      )}
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div key={index}>
            {item}
            {index !== items.length - 1 && <hr className="mt-3 text-gray-300"/>}
          </div>
        ))}
      </div>
    </section>
  );
}
