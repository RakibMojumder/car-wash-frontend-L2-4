import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "bookings",
    color: "#2563eb",
  },
} satisfies ChartConfig;

type TData = {
  month: string;
  bookings: number;
};

type TBarChartsProps = {
  data: Array<TData>;
};

const BarCharts = ({ data }: TBarChartsProps) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={data} barGap="50px">
        <Bar dataKey="bookings" fill="var(--primary)" radius={4} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          dataKey="bookings"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default BarCharts;
