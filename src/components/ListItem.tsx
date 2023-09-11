import Image from 'next/image';
import Link from 'next/link';

import type { Beer } from '@/types/beer';

type ListItemProps = Pick<Beer, 'id' | 'image_url' | 'name' | 'tagline'>;

const ListItem = ({ id, image_url, name, tagline }: ListItemProps) => (
  <Link
    className="flex justify-between flex-col items-center my-10 hover:bg-neutral-900 py-3"
    href={`/details/${id}`}
  >
    <div className="relative w-36 h-36">
      <Image
        className="items-center object-contain"
        src={image_url}
        alt={name}
        fill
      />
    </div>
    <div className="space-y-3">
      <h1 className="text-lg font-bold">{name}</h1>
      <p>{tagline}</p>
    </div>
  </Link>
);

export default ListItem;
