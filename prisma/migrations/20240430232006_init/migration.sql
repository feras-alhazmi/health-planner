-- AlterTable
ALTER TABLE "User" ADD COLUMN     "healthBarriers" TEXT[] DEFAULT ARRAY['']::TEXT[];
