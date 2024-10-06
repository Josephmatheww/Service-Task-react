import React from 'react';
import './Taskdata.css'; 

function Taskdata({ packageData }) {

 
  const buildTaskHierarchy = (tasks, parentId = null) => {
    return tasks
      .filter(task => task.parentServicePackageTaskId === parentId)
      .map(task => ({
        ...task,
        children: buildTaskHierarchy(tasks, task.id),
      }));
  };

 
  const TaskTree = ({ task }) => {
    return (
      <li className="task-item">
        <div className="task-title">
          <strong>{task.title}</strong> - {task.estimatedMinutes} min
        </div>
        {task.description && (
          <div
            className="task-description"
            dangerouslySetInnerHTML={{ __html: task.description }}
          />
        )}
        {task.children.length > 0 && (
          <ul className="task-children">
            {task.children.map(childTask => (
              <TaskTree key={childTask.id} task={childTask} />
            ))}
          </ul>
        )}
      </li>
    );
  };


  const taskHierarchy = buildTaskHierarchy(packageData.servicePackageTasks);

  return (
    <div className="task-hierarchy">
      <h1>{packageData.title}</h1>
      <p>{packageData.description}</p>
      <p>Price: {packageData.currency} {packageData.price.toFixed(2)}</p>

      <h2>Tasks</h2>
      <ul className="task-list">
        {taskHierarchy.map(task => (
          <TaskTree key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default Taskdata;
