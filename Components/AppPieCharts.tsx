import { Label, Pie, PieChart } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"


const chartData = [
    { browser: "Entertainment", visitors: 50, fill: "var(--color-chrome)" },
    { browser: "Bills", visitors: 750, fill: "var(--color-safari)" },
    { browser: "Dining Out", visitors: 75, fill: "var(--color-firefox)" },
    { browser: "Personal Care", visitors: 100, fill: "var(--color-edge)" },
  ]
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Entertainment",
      color: "#277C78",
    },
    safari: {
      label: "Bills",
      color: "#82C9D7",
    },
    firefox: {
      label: "Dining Out",
      color: "#F2CDAC",
    },
    edge: {
      label: "Personal Care",
      color: "#626070",
    },
  } satisfies ChartConfig

const AppPieCharts = () => {
   
    const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0);
    const showbBudgets = 338;
  return (
    <div>
      <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {`$${showbBudgets.toLocaleString()}`}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 26}
                          className="fill-muted-foreground"
                        >
                          of {`$${totalVisitors}`} limit
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
    </div>
  )
}

export default AppPieCharts
