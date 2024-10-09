import { Link } from "raviger";

function EditTask ({taskId}) {
    return (
        <div>
            <h1>Task {taskId}</h1>
            <Link href="/">Back</Link>
        </div>
    );
}

export default EditTask;