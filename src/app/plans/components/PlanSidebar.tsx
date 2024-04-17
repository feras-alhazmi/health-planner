// components/PlansSidebar.js
"use client";
import { Card, Button, Spacer, CardHeader, CardBody } from "@nextui-org/react";
import { AiOutlinePlus } from "react-icons/ai";
import PlanCard from "./PlanCard";
import { useState } from "react";

export default function PlansSidebar() {
  const plansSegment = ["Inbox", "Today", "Upcoming"];
  const plans = ["Weight Management", "Physical Activity", "Nutrition"];
  const [selectedSegment, setSelectedSegment] = useState<String>();
  return (
    <Card radius="none" className="w-64 bg-white shadow-none ">
      <CardHeader className="justify-between">
        <h2 className="text-xl font-bold">Plans</h2>
        <Button className="auto light " isIconOnly>
          <AiOutlinePlus />
        </Button>
      </CardHeader>
      <CardBody>
        <Button
          startContent={<AiOutlinePlus />}
          className="w-full bg-blue text-white"
        >
          Add task
        </Button>
        <Spacer y={1} />

        {plansSegment.map((segment) => (
          <PlanCard
            key={segment}
            onClick={(label) => {
              setSelectedSegment(label);
            }}
            isSelected={selectedSegment === segment}
            label={segment}
            count={16}
          />
        ))}

        <h3 className="text-lg font-semibold mt-6 mb-2">My plans</h3>

        {plans.map((plan) => (
          <PlanCard
            key={plan}
            onClick={(label) => {
              setSelectedSegment(label);
            }}
            isSelected={selectedSegment === plan}
            label={plan}
            count={16}
          />
        ))}
        <Spacer y={1} />
        <Button
          startContent={<AiOutlinePlus />}
          className="w-full bg-blue text-white"
        >
          Add plan
        </Button>
      </CardBody>
    </Card>
  );
}
