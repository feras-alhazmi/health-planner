// components/PlansSidebar.js
"use client";
import { Card, Button, Spacer, CardHeader, CardBody } from "@nextui-org/react";
import { AiOutlinePlus } from "react-icons/ai";
import PlanCard from "./PlanCard";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/core/auth/store/Auth-Store";
import AddPlanModal from "./AddPlanModal";
import axios from "axios";
import { Plan } from "@prisma/client";
import { useSegement } from "@/core/auth/store/SegmentStore";
interface Segment {
  name: String;
  Id: String;
}

export default function PlansSidebar() {
  const plansSegment = ["Inbox", "Today", "Upcoming"];
  // const plans = ["Weight Management", "Physical Activity", "Nutrition"];
  const userId = useAuthStore((state) => state.userData?.userId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);
  const segementState = useSegement((state) => state);
  const [updateCount, setUpdateCount] = useState(0);
  const incrementUpdateCount = () => setUpdateCount((count) => count + 1);

  useEffect(() => {
    const fetchPlans = async () => {
      if (userId) {
        try {
          const planFromDb = await axios.get(
            `/api/plans?userId=${encodeURIComponent(userId)}`
          );
          setPlans(planFromDb.data);
        } catch (error) {
          console.error("Error fetching plans:", error);
        }
      }
    };

    fetchPlans();
  }, [updateCount, userId]);
  return (
    <Card radius="none" className="w-64 bg-white shadow-none ">
      <CardHeader className="justify-between">
        <h2 className="text-xl font-bold">Plans</h2>
      </CardHeader>
      <CardBody>
        <Button
          startContent={<AiOutlinePlus />}
          className="w-full bg-blue text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Add Plan
        </Button>

        <AddPlanModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={async (data) => {
            if (userId) {
              const newPlan = { ...data, owner_id: userId };
              await axios.post("/api/plan", newPlan);
              incrementUpdateCount();
            }
          }}
        />
        <Spacer y={1} />

        {plansSegment.map((segment) => (
          <PlanCard
            key={segment}
            onClick={(label) => {
              segementState.setSegment({ name: label, Id: label });
            }}
            isSelected={segementState.currentSegment?.Id === segment}
            label={segment}
            count={16}
          />
        ))}

        <h3 className="text-lg font-semibold mt-6 mb-2">My plans</h3>

        {plans ? (
          plans.map((plan) => (
            <PlanCard
              key={plan.plan_id}
              onClick={(label) => {
                segementState.setSegment({ name: label, Id: plan.plan_id });
              }}
              isSelected={segementState.currentSegment?.Id === plan.plan_id}
              label={plan.name}
              count={16}
            />
          ))
        ) : (
          <PlanCard
            onClick={(label) => {}}
            label={"No Plans created"}
            count={16}
          />
        )}
        <Spacer y={1} />
      </CardBody>
    </Card>
  );
}
