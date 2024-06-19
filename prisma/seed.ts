import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: {
      name: 'admin',
    },
  });

  const userRole = await prisma.role.upsert({
    where: { name: 'user' },
    update: {},
    create: {
      name: 'user',
    },
  });

  // Create users
  const user1 = await prisma.user.upsert({
    where: { email: 'user1@example.com' },
    update: {},
    create: {
      email: 'user1@example.com',
      password: 'password1', // You should hash the password in a real app
      roleId: userRole.id,
      name: 'User One',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'user2@example.com' },
    update: {},
    create: {
      email: 'user2@example.com',
      password: 'password2', // You should hash the password in a real app
      roleId: userRole.id,
      name: 'User Two',
    },
  });

  const admin = await prisma.user.upsert({
    where: { email: 'vudungit92@gmail.com' },
    update: {},
    create: {
      email: 'vudungit92@gmail.com',
      password: '123123', // You should hash the password in a real app
      roleId: adminRole.id,
      name: 'Vũ Dũng',
    },
  });

  // Create accounts
  const account1 = await prisma.account.create({
    data: {
      userId: user1.id,
      providerType: 'oauth',
      providerId: 'google',
      providerAccountId: 'user1_google',
      accessToken: 'access_token_user1_google',
    },
  });

  const account2 = await prisma.account.create({
    data: {
      userId: user2.id,
      providerType: 'oauth',
      providerId: 'google',
      providerAccountId: 'user2_google',
      accessToken: 'access_token_user2_google',
    },
  });

  const account3 = await prisma.account.create({
    data: {
      userId: admin.id,
      providerType: 'oauth',
      providerId: 'google',
      providerAccountId: 'admin_google',
      accessToken: 'access_token_admin_google',
    },
  });

  // Create sessions
  const session1 = await prisma.session.create({
    data: {
      userId: user1.id,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day from now
      sessionToken: 'session_token_user1',
      accessToken: 'access_token_user1',
    },
  });

  const session2 = await prisma.session.create({
    data: {
      userId: user2.id,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day from now
      sessionToken: 'session_token_user2',
      accessToken: 'access_token_user2',
    },
  });

  const session3 = await prisma.session.create({
    data: {
      userId: admin.id,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day from now
      sessionToken: 'session_token_admin',
      accessToken: 'access_token_admin',
    },
  });

  // Create verification requests
  const verificationRequest1 = await prisma.verificationRequest.create({
    data: {
      identifier: 'user1@example.com',
      token: 'verification_token_user1',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day from now
    },
  });

  const verificationRequest2 = await prisma.verificationRequest.create({
    data: {
      identifier: 'user2@example.com',
      token: 'verification_token_user2',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day from now
    },
  });
  // Seed levels
  const level1 = await prisma.level.create({
    data: {
      level: 'N5',
      description: 'Beginner',
    },
  });

  const level2 = await prisma.level.create({
    data: {
      level: 'N4',
      description: 'Elementary',
    },
  });

  // Seed vocabularies
  const vocabulary1 = await prisma.vocabulary.create({
    data: {
      word: 'こんにちは',
      hiragana: 'こんにちは',
      reading: 'Konnichiwa',
      meaning: 'Hello',
      levelId: level1.id,
      example: 'こんにちは、元気ですか？',
      exampleMeaning: 'Hello, how are you?',
    },
  });

  const vocabulary2 = await prisma.vocabulary.create({
    data: {
      word: 'ありがとう',
      hiragana: 'ありがとう',
      reading: 'Arigatou',
      meaning: 'Thank you',
      levelId: level2.id,
      example: 'ありがとう、お願いします。',
      exampleMeaning: 'Thank you, please.',
    },
  });

  // Seed kanjis
  const kanji1 = await prisma.kanji.create({
    data: {
      character: '日',
      meaning: 'Sun, Day',
      levelId: level1.id,
      kunyomi: 'ひ、-び、-か',
      onyomi: 'ニチ、ジツ',
      example: '日本',
      explanation: 'Japan',
    },
  });

  const kanji2 = await prisma.kanji.create({
    data: {
      character: '月',
      meaning: 'Moon, Month',
      levelId: level2.id,
      kunyomi: 'つき',
      onyomi: 'ゲツ、ガツ',
      example: '月曜日',
      explanation: 'Monday',
    },
  });

  // Seed grammars
  const grammar1 = await prisma.grammar.create({
    data: {
      structure: '〜てください',
      explanation: 'Please do ~',
      example: '食べてください (Tabete kudasai) - Please eat',
      levelId: level1.id,
    },
  });

  const grammar2 = await prisma.grammar.create({
    data: {
      structure: '〜たり〜たりする',
      explanation: 'Doing things such as ~ and ~',
      example:
        '日本に行ったり、韓国に行ったりします。(Nihon ni ittari, Kankoku ni ittari shimasu) - I go to Japan, and I also go to Korea.',
      levelId: level2.id,
    },
  });

  console.log('Seeding completed!');

  console.log({
    user1,
    user2,
    admin,
    account1,
    account2,
    account3,
    session1,
    session2,
    session3,
    verificationRequest1,
    verificationRequest2,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
