import React from 'react';
import Home from '@/app/home/_components/Home';
import { VocabularyRepository } from '@/app/_repositories/Vocalbulary';
export default async function HomePages() {
  const vocabulary = await VocabularyRepository.findMany();
  return (
    <div>
      <Home vocabulary={vocabulary} />
    </div>
  );
}
