import React, {useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import DataProps from './interfaces/DataProps';
import useRequest from './hooks/use-request';
import TaskProps from './interfaces/TaskProps';

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const requestAction = useCallback((data: DataProps) => {
    const loadedTasks:TaskProps[] = [];

for (const taskKey in data) {
  console.log(`data with id on app: ${JSON.stringify(data[taskKey])}`)
  loadedTasks.push({ id: taskKey, text: data[taskKey].text });
}

setTasks(loadedTasks)
  },[])

  const { fetchTasks, error, isLoading} = useRequest({requestMethod: 'GET', requestAction})

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const taskAddHandler = useCallback((task:TaskProps) => {
    console.log(task)
    setTasks((prevTasks) => prevTasks.concat(task));
  }, []);

  return (
    <React.Fragment>
      <NewTask taskAddHandler={taskAddHandler}/>
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;