import { Bar, BarChart, Tooltip } from 'recharts';

export default function BarChartClickable() {
  return (
    <BarChart

      data={[
            { name: "Mon", bv: 32 },
            { name: "Tue", uv: 40 },
            { name: "Wed", bv: 28 },
            { name: "Thu", uv: 53 },
            { name: "Fri", bv: 44 },
            { name: "Sat", uv: 65 },
            { name: "Sun", bv: 80 },
            { name: "Mon", bv: 32 },
            { name: "Tue", uv: 40 },
            { name: "Wed", bv: 28 },
            { name: "Thu", uv: 53 },
            { name: "Fri", bv: 44 },
            { name: "Sat", uv: 65 },
            { name: "Sun", bv: 80 },
            { name: "Mon", bv: 32 },
            { name: "Tue", uv: 40 },
            { name: "Wed", bv: 28 },
            { name: "Thu", uv: 53 },
            { name: "Fri", bv: 44 },
            { name: "Sat", uv: 65 },
      ]}
    >
      <Tooltip trigger="click" content={() => null} cursor={false} shared={false} />
      <Bar dataKey="uv" stackId="a" fill="#011c75" />
      <Bar dataKey="bv" stackId="a" fill="#e2102d" />
    </BarChart>
  );
}