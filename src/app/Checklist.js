import { Grid, Card, CardContent, Typography, CardActions, Button } from "@mui/material"

export default ({checklistCategory, backToTop, onUpdateCheckList}) => {
  const finished = checklistCategory.checklist.filter(task => task.value === true).length
  const finishedPercentage = finished / checklistCategory.checklist.length * 100
  const unfinishedPercentage = 100 - finishedPercentage
  const finishedTasks = checklistCategory.checklist.filter(task => task.value === true)
  const unfinishedTasks = checklistCategory.checklist.filter(task => task.value !== true)

  const onMarkDone = (name) => {
    const checklist = [...checklistCategory.checklist]
    const changedTask = checklist.find(task => task.name === name)
    changedTask.value = true
    const newChecklistCategory = {
      ...checklistCategory,
      checklist
    }
    onUpdateCheckList(newChecklistCategory)
  }

  const onMarkUndone = (name) => {
    const checklist = [...checklistCategory.checklist]
    const changedTask = checklist.find(task => task.name === name)
    changedTask.value = false
    const newChecklistCategory = {
      ...checklistCategory,
      checklist
    }
    onUpdateCheckList(newChecklistCategory)
  }

  return <Grid width='100%'>
    <Grid display='flex' flexDirection='row'>
      <Grid 
        onClick={backToTop}
        height='80px' 
        width='140px'
        sx={{ backgroundColor: checklistCategory.finishedColor, borderRight: `2px solid ${checklistCategory.unfinishedColor}` }}
      >
        <img src='logos/back.png'/>
      </Grid>
      <Grid height='80px' sx={{ backgroundColor: checklistCategory.finishedColor }} container display='flex' flexGrow={1}>
        <Grid height='80px' width={`${finishedPercentage}%`}/>
        <Grid 
          width={`${unfinishedPercentage}%`} 
          height='80px' 
          sx={{ backgroundColor: checklistCategory.unfinishedColor }}
        />
      </Grid>
    </Grid>
    <Grid container direction='row' mt={3}>
      <Grid item xs={6}>
        {
          unfinishedTasks.map((task, index) => (
            <Card key={index} sx={{margin: "10px", backgroundColor: checklistCategory.cardColor}}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {task.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {task.description || ''}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => onMarkDone(task.name)} size="small" variant="contained" color='success'>Mark as Done</Button>
              </CardActions>
            </Card>
          ))
        }
      </Grid>
      <Grid item xs={6}>
        {
          finishedTasks.map((task, index) => (
            <Card key={index} sx={{margin: "10px", backgroundColor: checklistCategory.cardColor}}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {task.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {task.description || ''}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => onMarkUndone(task.name)} size="small" variant="contained" color='warning'>Haven't Done</Button>
              </CardActions>
            </Card>
          ))
        }
      </Grid>
    </Grid>
  </Grid>
}