type CategoryCardProps = {
  name: string;
  description: string;
  onShop: () => void;
};

export default function CategoryCard({
  name,
  description,
  onShop
}: CategoryCardProps) {
  return (
    <article className="category-card">
      <div className="card-icon">✦</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={onShop}>Shop Now →</button>
    </article>
  );
}
