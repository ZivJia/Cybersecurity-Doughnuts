"use client";

import defaultChecklist from './checklist.json'
import { useState } from "react";
import styles from "./page.module.css"
import DoughnutChart from "./DoughnutChart";
import { Grid } from '@mui/material';
import Checklist from './Checklist';


export default function Home() {
  const [frontendList, setFrontendList] = useState(defaultChecklist['frontend'])
  const [backendList, setBackendList] = useState(defaultChecklist['backend'])
  const [infraList, setInfraList] = useState(defaultChecklist['infra'])
  const [pipelineList, setPipelineList] = useState(defaultChecklist['pipeline'])

  const [selectedCategory, setSelectedCategory] = useState(null)
  const onClickDoughnut = (category) => {
    setSelectedCategory(defaultChecklist[category])
  }

  const backToTop = () => setSelectedCategory(null)
  const onUpdateCheckList = (checklistCategory) => {
    const category = checklistCategory.id
    switch (category) {
      case 'frontend':
        setFrontendList(checklistCategory)
        break
      case 'backend':
        setBackendList(checklistCategory)
        break
      case 'infra':
        setInfraList(checklistCategory)
        break
      case 'pipeline':
        setPipelineList(checklistCategory)
        break
    }
    setSelectedCategory(checklistCategory)
  }
  
  return (
    <main className={styles.main}>
      {
        !!selectedCategory ? 
        <Checklist 
          checklistCategory={selectedCategory}
          backToTop={backToTop}
          onUpdateCheckList={onUpdateCheckList}
        /> :
        <Grid container mt={5} pl={8}>
          <Grid item xs={5}>
            <DoughnutChart
              onClickDoughnut={onClickDoughnut}
              category='frontend'
              checklistCategory={frontendList}
            />
          </Grid>
          <Grid item xs={2}/>
          <Grid item xs={5}>
            <DoughnutChart
              onClickDoughnut={onClickDoughnut}
              category='backend'
              checklistCategory={backendList}
            />
          </Grid>
          <Grid item xs={5}>
            <DoughnutChart
              onClickDoughnut={onClickDoughnut}
              category='infra'
              checklistCategory={infraList}
            />
          </Grid>
          <Grid item xs={2}/>
          <Grid item xs={5}>
            <DoughnutChart
              onClickDoughnut={onClickDoughnut}
              category='pipeline'
              checklistCategory={pipelineList}
            />
          </Grid>
        </Grid>
      }
      
    </main>
  );
}
