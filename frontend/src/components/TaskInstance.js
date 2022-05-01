
function TaskInstance({ task }) {
    return (
        <div className='task-instance'>
            <input type="checkbox" />
            <h1>{task.title}</h1>
            {/* <p>{task._id}</p> */}
            <button>Delete</button>
        </div>
    )
}
export default TaskInstance;