// This component will display list of tasks retrieved from back end.
import TaskInstance from "./TaskInstance"


function Tasks(props) {
    let allTasks = props.data

    return (
        <div className='tasks-container'>
            <h2>Your Tasks</h2>
            <div className='tasks-list'>
                {allTasks && allTasks.map(task =>
                    <TaskInstance key={task._id} task={task} />
                )}
            </div>
        </div>
    )
}

export default Tasks;
