
function TaskInstance({ task }) {
    return (
        <div className='Task-instance'>
            <h1>{task.title}</h1>
            <p>{task._id}</p>
        </div>
    )
}
export default TaskInstance;