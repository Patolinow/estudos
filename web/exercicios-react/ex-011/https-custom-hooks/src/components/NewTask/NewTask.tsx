import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useRequest from '../../hooks/use-request';
import DataProps from '../../interfaces/DataProps';
import TaskProps from '../../interfaces/TaskProps';
import { useCallback } from 'react';

interface NewTaskProps {
  taskAddHandler(task: TaskProps): void
}

const NewTask = ({taskAddHandler}:NewTaskProps) => {
  
  const requestAction = useCallback( async (data: DataProps, taskText: string | undefined) => {
    
    if (taskText){
      console.log(taskText)
      
      const generatedId: string = data.name; // firebase-specific => "name" contains generated id
      const createdTask: TaskProps = { id: generatedId, text: taskText };
      taskAddHandler(createdTask)
    }
  },[])

  const {error ,fetchTasks ,isLoading} = useRequest({requestMethod: 'POST', requestAction})



  const enterTaskHandler = async (taskText: string) => {
    fetchTasks(taskText)
  };

  

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
