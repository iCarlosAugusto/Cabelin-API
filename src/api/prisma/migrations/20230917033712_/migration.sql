-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_phoneNumber_key" ON "Client"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_email_key" ON "Partner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_phoneNumber_key" ON "Partner"("phoneNumber");
