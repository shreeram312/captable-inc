import { RiPieChartFill } from "@remixicon/react";
import type { Metadata } from "next";
import EmptyState from "../../../../../components/common/empty-state";
import { Button } from "../../../../../components/ui/button";

export const metadata: Metadata = {
  title: "Cap table",
};

const CaptablePage = () => {
  return (
    <EmptyState
      icon={<RiPieChartFill />}
      title="Work in progress."
      subtitle="This page is not yet available."
    >
      <Button>Import existing captable</Button>
    </EmptyState>
  );
};

export default CaptablePage;
