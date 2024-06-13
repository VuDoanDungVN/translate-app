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
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: 'adminpassword', // You should hash the password in a real app
      roleId: adminRole.id,
      name: 'Admin User',
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
