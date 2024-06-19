import { prisma } from '@/app/_utils/prismaSingleton';

import type { Vocabulary as _Vocabulary } from '@prisma/client';

export type Vocabulary = _Vocabulary;

export namespace VocabularyRepository {
  export async function findMany() {
    return await prisma.vocabulary.findMany();
  }

  export async function findUnique(id: string) {
    return await prisma.vocabulary.findUnique({
      where: {
        id: id,
      },
    });
  }

  export async function create(vocabulary: Vocabulary) {
    return await prisma.vocabulary.create({
      data: vocabulary,
    });
  }

  export async function update(id: string, vocabulary: Vocabulary) {
    const { updatedAt, ...vocabularyWithoutUpdatedAt } = vocabulary;
    return await prisma.vocabulary.update({
      where: {
        id: id,
        updatedAt: updatedAt,
      },
      data: {
        ...vocabularyWithoutUpdatedAt,
      },
    });
  }

  export async function remove(id: string) {
    return await prisma.vocabulary.delete({
      where: {
        id: id,
      },
    });
  }
}
