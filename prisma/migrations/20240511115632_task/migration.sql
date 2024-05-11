-- DropIndex
DROP INDEX "Event_userId_key";

-- AlterTable
ALTER TABLE "Plan" ALTER COLUMN "filter" DROP NOT NULL,
ALTER COLUMN "group_by" DROP NOT NULL,
ALTER COLUMN "sort" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "is_done" SET DEFAULT false,
ALTER COLUMN "priority" SET DEFAULT 0,
ALTER COLUMN "reminders" SET DEFAULT 0,
ALTER COLUMN "ignore_time" SET DEFAULT true;

-- AlterTable
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");
