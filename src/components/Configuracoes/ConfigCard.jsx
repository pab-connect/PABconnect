export default function ConfigCard({ title, description, items }) {
  return (
    <section className="bg-white font-(family-name:--font-inter) w-full px-6 py-4 rounded-lg flex flex-col">
      <h2 className="text-2xl font-semibold text-center">{title}</h2>
      {description && (
        <h3 className="text-purple-950 font-medium text-center mb-5">
          {description}
        </h3>
      )}
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div key={index}>
            {item}
            {index !== items.length - 1 && <hr className="mt-3"/>}
          </div>
        ))}
      </div>
    </section>
  );
}
