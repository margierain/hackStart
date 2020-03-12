import { NextPageContext } from 'next';
import TaskDetailView from 'components/TaskDetailView';

type Props = {
  taskId: string;
};

export default function TaskDetailsPage({ taskId }: Props) {
  return <TaskDetailView taskId={taskId} role={'developer'} />;
}

TaskDetailsPage.getInitialProps = async function(ctx: NextPageContext) {
  const { query } = ctx;
  const { taskId } = query;
  return { taskId };
};
