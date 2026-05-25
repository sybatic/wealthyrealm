import type { Metadata } from "next";
import InvestForm from "./InvestForm";

export const metadata: Metadata = {
  title: "Invest — WealthRim Group",
  description: "Apply to invest in WealthRim Group across food delivery, fabric supply, and real estate in Africa.",
};

export default function InvestPage() {
  return <InvestForm />;
}
