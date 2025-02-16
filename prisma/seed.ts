import { PrismaClient, Role, PaymentMethod } from '@prisma/client';

const prisma = new PrismaClient();

async function seedUsers() {
  const users = await prisma.user.createMany({
    data: [
      {
        id: 'user1',
        email: 'alice@example.com',
        name: 'Alice',
        password: 'password123',
        token: 'token1',
        userRole: Role.BUYER,
      },
      {
        id: 'user2',
        email: 'bob@example.com',
        name: 'Bob',
        password: 'password123',
        token: 'token2',
        userRole: Role.SELLER,
      },
    ],
  });

  return users;
}

async function seedUpi() {
  const upiIds = await prisma.upi.createMany({
    data: [
      {
        userId: 'user1',
        value: 'alice@upi',
      },
      {
        userId: 'user2',
        value: 'bob@upi',
      },
    ],
  });

  return upiIds;
}

async function seedSellers() {
  const sellers = await prisma.seller.createMany({
    data: [
      {
        id: 'user2',
        storename: "Bob's Store",
        address: '123 Market St',
        phone_number: '1234567890',
      },
    ],
  });

  return sellers;
}

async function seedProducts() {
  const products = await prisma.products.createMany({
    data: [
      {
        id: 'product1',
        tittle: 'Laptop',
        description: 'High performance laptop',
        price: '1000',
        quantity: 10,
        sellerid: 'cm6vv9j7i0000xhz8wokyf9re',
      },
      {
        id: 'product2',
        tittle: 'Headphones',
        description: 'Noise-cancelling headphones',
        price: '200',
        quantity: 15,
        sellerid: 'cm6vv9j7i0000xhz8wokyf9re',
      },
    ],
  });

  return products;
}

async function seedOrders() {
  const orders = await prisma.order.createMany({
    data: [
      {
        id: 'order1',
        buyer_id: 'user1',
        order_date: new Date('2025-02-08T13:10:00Z'),
        total: '1200',
      },
    ],
  });

  return orders;
}

async function seedOrderItems() {
  const orderItems = await prisma.orderItem.createMany({
    data: [
      {
        id: 'orderitem1',
        orderid: 'order1',
        product_id: 'product1',
        quantity: 1,
        price: '1000',
      },
      {
        id: 'orderitem2',
        orderid: 'order1',
        product_id: 'product2',
        quantity: 1,
        price: '200',
      },
    ],
  });

  return orderItems;
}

async function seedPayments() {
  const payments = await prisma.payment.create({
    data: {
      id: 'payment1',
      orderid: 'order1',
      paymentMethod: PaymentMethod.ONLINE,
      paymentDate: new Date('2025-02-08T13:15:00Z'),
      amount: '1200',
    },
  });

  return payments;
}

async function seedReviews() {
  const reviews = await prisma.review.create({
    data: {
      id: 'review1',
      productid: 'product1',
      buyerid: 'user1',
      reviewDate: new Date('2025-02-08T13:20:00Z'),
      rating: 5,
      comment: 'Excellent laptop!',
    },
  });

  return reviews;
}

async function main() {
  await prisma.$transaction(async (prisma) => {
    await seedUsers();
    await seedUpi();
    await seedSellers();
    await seedProducts();
    await seedOrders();
    await seedOrderItems();
    await seedPayments();
    await seedReviews();
  });

  console.log('Data seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
