"use client";

import defaultChecklist from './checklist.json'
import { useEffect, useState } from "react";
import styles from "./page.module.css"
import DoughnutChart from "./DoughnutChart";

const getFinishedCount = (category) => {
  return category.checklist.reduce((acc, cur) => acc + cur.value ? 1 : 0, 0)
}

const getUnfinished = (checklist) => {
  const allCount = checklist['frontend'].checklist.length + 
    checklist['backend'].checklist.length + 
    checklist['infra'].checklist.length + 
    checklist['pipeline'].checklist.length

  const unfinished = allCount - 
    getFinishedCount(checklist['frontend']) -
    getFinishedCount(checklist['backend']) - 
    getFinishedCount(checklist['infra']) - 
    getFinishedCount(checklist['pipeline'])

  return unfinished
}

const getChartData = (checklist) => {
  return {
    labels: [
      checklist['frontend'].name,
      checklist['backend'].name,
      checklist['infra'].name,
      checklist['pipeline'].name,
      'Waiting on action',
    ], 
    datasets: [
      {
        label: "Items checked",
        data: [
          getFinishedCount(checklist['frontend']),
          getFinishedCount(checklist['backend']),
          getFinishedCount(checklist['infra']),
          getFinishedCount(checklist['pipeline']),
          getUnfinished(checklist)
        ],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderWidth: 0
      }
    ]
  }
}

export default function Home() {
  const [checklist, setChecklist] = useState(defaultChecklist)
  const [chartData, setChartData] = useState(getChartData(checklist))

  useEffect(
    () => setChartData(getChartData(checklist)),
    [setChartData, checklist]
  )

  return (
    <main className={styles.main}>
      <DoughnutChart
        chartData={chartData}
      />
    </main>
  );
}
