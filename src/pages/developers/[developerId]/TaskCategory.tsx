import React from 'react';
import TaskCard, { Task } from 'components/TaskList/TaskCard';
import { Typography, makeStyles, Theme } from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles<Theme>(theme => ({
  title: {
    position: 'relative',
    marginBottom: theme.spacing(3),
    '&:before': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const getTaskCategory = (status: string) => {
  if (['needs_changes', 'in_progress'].includes(status))
    return 'tasksInProgress';
  if (['assigned'].includes(status)) return 'upcomingTasks';
  if (['client_review', 'internal_review'].includes(status))
    return 'tasksUnderReview';
};

type TaskCategoryType = {
  [key: string]: Task[];
};
const orderTask = (prevTasks: Task[], task: Task) => {
  const status = task.status;
  if (status === 'in_progress') return [task, ...prevTasks];
  if (status === 'needs_changes') return [...prevTasks, task];

  return [...prevTasks, task];
};
const categorizeTasks = (tasks: Task[]): TaskCategoryType => {
  return tasks.reduce((acc: TaskCategoryType, task: Task) => {
    const category = getTaskCategory(task.status);

    if (!category) return acc;

    const prevTasks = acc[category] || [];

    return { ...acc, [category]: orderTask(prevTasks, task) };
  }, {});
};

type Props = {
  tasks: Task[];
};
type SingleCategoryProps = {
  category: string;
  tasks: Task[];
};

const SingleTaskCategory: React.FC<SingleCategoryProps> = (
  props: SingleCategoryProps
) => {
  const classes = useStyles();
  const router = useRouter();
  const { tasks, category } = props;

  return (
    <>
      <Typography className={classes.title} variant="h5">
        {category}
      </Typography>
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          handleViewTask={() =>
            router.push('/tasks/[taskId]', `/tasks/${task.id}`)
          }
        />
      ))}
    </>
  );
};

const TaskCategory: React.FC<Props> = (props: Props) => {
  const { tasks } = props;

  const { tasksInProgress, upcomingTasks, tasksUnderReview } = categorizeTasks(
    tasks
  );

  return (
    <>
      {tasksInProgress && (
        <SingleTaskCategory
          category="Tasks In Progress"
          tasks={tasksInProgress}
        />
      )}
      {upcomingTasks && (
        <SingleTaskCategory category="Up-coming Tasks" tasks={upcomingTasks} />
      )}
      {tasksUnderReview && (
        <SingleTaskCategory
          category="Tasks Under Review"
          tasks={tasksUnderReview}
        />
      )}
    </>
  );
};

export default TaskCategory;
