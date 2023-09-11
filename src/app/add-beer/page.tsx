'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import Container from '@/components/Container';
import { addBeer } from '@/redux/beerSlice';
import { useAppDispatch } from '@/redux/hooks';

const AddBeer = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [values, setValues] = useState<FormBeer>({
    name: '',
    tagline: '',
    description: '',
    firstBrewed: '',
    image_url: '',
    rating: 0,
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
    dispatch(addBeer(values));
    router.push('/');
  };

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Add new beer</h1>
      <form className="flex flex-col gap-7 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Container>
            <label htmlFor="name">Name:</label>
            <input
              className="bg-neutral-800/30 border p-2 rounded"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              required
            />
          </Container>
          <Container>
            <label htmlFor="tagline">Tagline:</label>
            <input
              className="bg-neutral-800/30 border p-2 rounded"
              id="tagline"
              type="text"
              name="tagline"
              onChange={handleChange}
              required
            />
          </Container>
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
          <Container>
            <label htmlFor="firstBrewed">First brewed:</label>
            <input
              className="bg-neutral-800/30 border p-2 rounded"
              id="firstBrewed"
              type="date"
              name="firstBrewed"
              onChange={handleChange}
              required
            />
          </Container>
          <Container>
            <label htmlFor="rating">Rating:</label>
            <input
              className="bg-neutral-800/30 border p-2 rounded"
              id="rating"
              type="number"
              min={0}
              max={10}
              name="rating"
              onChange={handleChange}
              required
            />
          </Container>
          <Container>
            <label htmlFor="image_url">Image URL:</label>
            <input
              className="bg-neutral-800/30 border p-2 rounded"
              id="image_url"
              type="text"
              name="image_url"
              required
              onChange={handleChange}
            />
          </Container>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-700 hover:bg-blue-500 px-5 py-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBeer;
