import { getPaginated } from '@/fetchers/punkapi';
import ListItem from '@/components/ListItem';

const ListingPage = async () => {
  const data = await getPaginated();

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data?.map(({ id, name, tagline, image_url }) => (
          <ListItem
            key={id}
            id={id}
            image_url={image_url}
            name={name}
            tagline={tagline}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
