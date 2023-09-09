import Image from 'next/image';
import Link from 'next/link';

interface ListItemProps {
  id: number;
  image_url: string;
  name: string;
  tagline: string;
}

const ListItem = ({ id, image_url, name, tagline }: ListItemProps) => (
  <Link
    className="flex justify-between flex-col items-center my-10 hover:bg-neutral-900 py-3"
    href={`/details/${id}`}
  >
    <div className="relative w-36 h-36">
      <Image
        src={image_url}
        alt={name}
        fill
        objectFit="contain"
        objectPosition="center"
      />
    </div>
    <div className="space-y-3">
      <h1 className="text-lg font-bold">{name}</h1>
      <p>{tagline}</p>
    </div>
  </Link>
);

export default ListItem;
