import ListItem from '@/components/ListItem';

interface ListProps {
  beers: Beers;
}

const List = ({ beers }: ListProps) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
    {beers?.map(({ id, name, tagline, image_url }) => (
      <ListItem
        key={id}
        id={id}
        image_url={image_url}
        name={name}
        tagline={tagline}
      />
    ))}
  </div>
);

export default List;
