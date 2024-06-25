"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from 'chart.js'
import { Grid } from "@mui/material";

Chart.register(ArcElement, Tooltip);

const getFinishedCount = (checklist) => {
  return checklist.filter(task => task.value === true).length
}

const getChartData = (checklistCategory) => {
  const checklist = checklistCategory.checklist
  const finishedCount = getFinishedCount(checklist)
  return {
    labels: [
      'Finished',
      'Waiting Action'
    ], 
    datasets: [
      {
        data: [
          finishedCount,
          checklist.length - finishedCount
        ],
        backgroundColor: [
          checklistCategory.finishedColor,
          checklistCategory.unfinishedColor,
        ],
        borderWidth: 0,
        hoverOffset: 4
      }
    ]
  }
}

function DoughnutChart({ checklistCategory, category, onClickDoughnut }) {
  const chartData = getChartData(checklistCategory)
  const pngPath = `logos/${category}.png`

  return (
    <Grid container direction='row' mb={5}>
      <Grid>
        <img src={pngPath} style={{marginLeft: "70px"}}/>
        <Grid item xs={10} width='400px' height='400px'>
          <Doughnut data={chartData} options={{
            plugins: {
              legend: {
                  display: true,
              }
            }}}
            onClick={() => onClickDoughnut(category)}
          />
        </Grid>
      </Grid>
      <Grid item xs={2}>
      </Grid>
    </Grid>
  );
}
export default DoughnutChart;