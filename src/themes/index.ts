import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
	bodyTextColor: "#111",
	bodyBackgroundColor: "#fafafa",
	bodyFontFamily: `"Source Sans 3", sans-serif`,
	navBarHeight: "57",
	navBarTextColor: "#111",
	navBarHoverTextColor: "#e84142",
	navBarBackgroundColor: "#8a95bb",
	navBarBorderColor: "#555",
	mainTitleTextColor: "#111",
	linkHoverTextColor: "#e84142",
	sectionTitleTextColor01: "#111",
	sectionBackgroundColor01: "#e9ca6c",
	sectionBackgroundColor02: "#fafafa",
	sectionBorderStyle: "1px solid #111",
	lastUpdatedContainerTextColor: "#111",
	listTextColor: "#111",
	listBoxTextColor: "#111",
	listBoxHoverTextColor: "#e84142",
	listBoxBackgroundColor: "#f5f5f5",
	listBoxBorderStyle: "1px solid #111",
	nestedListDecoratorColor: "#e84142",
	tabBackgroundColor: "#8a95bb",
	tabActiveBackgroundColor: "#e84142",
	tabHoverTextColor: "#fafafa",
	lineChartFontFamily: `"Source Sans 3", sans-serif`,
	lineChartBackgroundColor: "#5e6c87",
	lineChartGradientColorFrom: "#ffe600",
	lineChartGradientColorTo: "#e84142",
	lineChartGridBorderColor: "#fafafa",
	lineChartXAxisTitleColor: "#fafafa",
	lineChartXAxisTickColor: "#fafafa",
	lineChartXAxisBorderColor: "#fafafa",
	lineChartXAxisLabelColor: "#fafafa",
	lineChartYAxisTitleColor: "#fafafa",
	lineChartYAxisTickColor: "#fafafa",
	lineChartYAxisBorderColor: "#fafafa",
	lineChartYAxisLabelColor: "#fafafa",
	candlestickChartFontFamily: `"Source Sans 3", sans-serif`,
	candlestickChartBackgroundColor: "#5e6c87",
	candlestickChartCandlestickColorUpward: "#00b746",
	candlestickChartCandlestickColorDownward: "#f00",
	// ㄴ ApexCharts 버그: "red"로 하면 stroke만 색이 적용되고, fill은 적용이 안 되는 버그가 있다.
	candlestickChartXAxisTitleColor: "#fafafa",
	candlestickChartXAxisTickColor: "#fafafa",
	candlestickChartXAxisBorderColor: "#fafafa",
	candlestickChartXAxisLabelColor: "#fafafa",
	candlestickChartYAxisTitleColor: "#fafafa",
	candlestickChartYAxisTickColor: "#fafafa",
	candlestickChartYAxisBorderColor: "#fafafa",
	candlestickChartYAxisLabelColor: "#fafafa",
};

export const darkTheme: DefaultTheme = {
	bodyTextColor: "#111",
	bodyBackgroundColor: "#111",
	bodyFontFamily: `"Source Sans 3", sans-serif`,
	navBarHeight: "57",
	navBarTextColor: "#ffe600",
	navBarHoverTextColor: "#d4ff00",
	navBarBackgroundColor: "#6d3c3c",
	navBarBorderColor: "#fff",
	mainTitleTextColor: "#ffe600",
	linkHoverTextColor: "#e84142",
	sectionTitleTextColor01: "#111",
	sectionBackgroundColor01: "#8a95bb",
	sectionBackgroundColor02: "#fafafa",
	sectionBorderStyle: "1px solid #111",
	lastUpdatedContainerTextColor: "#fff",
	listTextColor: "#111",
	listBoxTextColor: "#111",
	listBoxHoverTextColor: "#e84142",
	listBoxBackgroundColor: "#f5f5f5",
	listBoxBorderStyle: "1px solid #111",
	nestedListDecoratorColor: "#ffe600",
	tabBackgroundColor: "#6d3c3c",
	tabActiveBackgroundColor: "#e84142",
	tabHoverTextColor: "#ffe600",
	lineChartFontFamily: `"Source Sans 3", sans-serif`,
	lineChartBackgroundColor: "#222",
	lineChartGradientColorFrom: "#ffe600",
	lineChartGradientColorTo: "#e84142",
	lineChartGridBorderColor: "#fafafa",
	lineChartXAxisTitleColor: "#f5f5f5",
	lineChartXAxisTickColor: "#f5f5f5",
	lineChartXAxisBorderColor: "#f5f5f5",
	lineChartXAxisLabelColor: "#f5f5f5",
	lineChartYAxisTitleColor: "#f5f5f5",
	lineChartYAxisTickColor: "#f5f5f5",
	lineChartYAxisBorderColor: "#f5f5f5",
	lineChartYAxisLabelColor: "#f5f5f5",
	candlestickChartFontFamily: `"Source Sans 3", sans-serif`,
	candlestickChartBackgroundColor: "#222",
	candlestickChartCandlestickColorUpward: "#3fb27f",
	candlestickChartCandlestickColorDownward: "#e84142",
	candlestickChartXAxisTitleColor: "#f5f5f5",
	candlestickChartXAxisTickColor: "#f5f5f5",
	candlestickChartXAxisBorderColor: "#f5f5f5",
	candlestickChartXAxisLabelColor: "#f5f5f5",
	candlestickChartYAxisTitleColor: "#f5f5f5",
	candlestickChartYAxisTickColor: "#f5f5f5",
	candlestickChartYAxisBorderColor: "#f5f5f5",
	candlestickChartYAxisLabelColor: "#f5f5f5",
};
