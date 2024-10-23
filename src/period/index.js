import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Test from "./test";
import { dataset } from "./dataset";
import { Grid, Typography } from "@mui/material";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

function Index(props) {
	const layouts = dataset.map((ele) => ele.grid_props);
	const onLayoutChange = (newLayout, layoutsprops) => {
		console.log("newLayout", newLayout);
		console.log("layoutsprops", layoutsprops);
	};
	return (
		<div>
			<ResponsiveReactGridLayout
				className="layout"
				layouts={{
					lg: layouts,
					md: layouts,
					xs: layouts,
					xxs: layouts,
				}}
				compactType={null}
				allowOverlap={true}
				rowHeight={15}
				breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
				onLayoutChange={(newLayout) => {
					onLayoutChange(newLayout, layouts);
				}}
				cols={{ lg: 18, md: 18, sm: 18, xs: 18, xxs: 18 }}
			>
				{dataset.map((ele) => (
					<div
						key={ele.grid_props.i}
						style={{
							borderRadius: "4px",
							background: ele.props.backgroundcolor,
							padding: "2px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Grid>
							<Typography sx={{ color: ele.props.color }}>
								{ele.display_name}
							</Typography>
						</Grid>

						<Typography sx={{ color: ele.props.color, fontSize: "13px" }}>
							{ele.props.title}
						</Typography>
					</div>
				))}
			</ResponsiveReactGridLayout>
		</div>
	);
}

export default Index;
