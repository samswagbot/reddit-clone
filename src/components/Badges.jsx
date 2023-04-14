export default function Badges({ award }) {
  const { icon_url, name } = award;
  return (
    <div className="text-center font-bold">
      <span className="text-xs">{name}</span>
      <img src={icon_url} alt={name} className="inline-block w-4 h-4 ml-1" />
    </div>
  );
}
