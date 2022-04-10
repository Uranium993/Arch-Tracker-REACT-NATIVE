import { View, Text, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import React from "react";

const Chart = () => {
  return (
    <View style={{ marginLeft: 10, marginRight: 10 }}>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                100, 200, 500, 192, 512, 22,

                // Math.random() * 100,
                // Math.random() * 100,
                // Math.random() * 100,
                // Math.random() * 100,
                // Math.random() * 100,
                // Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width - 20} // from react-native
        height={240}
        yAxisLabel="$"
        //yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          //   backgroundColor: "#e26a00",
          //   backgroundGradientFrom: "#fb8c00",
          //   backgroundGradientTo: "#ffa726",
          //   decimalPlaces: 2, // optional, defaults to 2dp
          //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          backgroundGradientFrom: "#1E2923",
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: "#08130D",
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.5,
          useShadowColorFromDataset: false, // optional
          //labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export default Chart;
