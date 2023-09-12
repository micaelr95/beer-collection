'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import Container from '@/components/Container';
import { add } from '@/redux/beerSlice';
import { useAppDispatch } from '@/redux/hooks';
import Button from '@/components/Button';
import type { FormBeer } from '@/types/beer';
import Input from '@/components/Input';

const AddBeer = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [values, setValues] = useState<FormBeer>({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    image_url: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((values) => ({
      ...values,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(add(values));
    router.push('/');
  };

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Add new beer</h1>
      <form className="flex flex-col gap-7 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input id="name" label="Name:" handleChange={handleChange} />
          <Input id="tagline" label="Tagline:" handleChange={handleChange} />
          <Container>
            <label htmlFor="description">Description:</label>
            <textarea
              className="bg-neutral-800/30 border p-2 rounded"
              id="description"
              name="description"
              onChange={handleChange}
              required
            />
          </Container>
          <Input
            id="first_brewed"
            label="First brewed:"
            type="month"
            handleChange={handleChange}
          />
          <Input
            id="image_url"
            label="Image URL:"
            type="url"
            handleChange={handleChange}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default AddBeer;
