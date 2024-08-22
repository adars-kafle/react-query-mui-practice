import { useTaskContext } from "../../context/TaskContext";
import { Container, Grid, Typography } from "@mui/material";
import TaskContainer from "./AllTasksContainer";
import { type Task } from "../../types";

const AllTasks = () => {
  const { tasks } = useTaskContext();

  const statuses = ["pending", "in-progress", "completed"];

  const getTasksByStatus = (status: string) => {
    return tasks.filter((task: Task) => task.status === status);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        All Tasks
      </Typography>
      <Grid container spacing={3}>
        {statuses.map((status) => (
          <Grid item xs={12} md={4} key={status}>
            <TaskContainer status={status} tasks={getTasksByStatus(status)} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllTasks;
