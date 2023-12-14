import Task from "../Task/Task";

type LaneProps = {
    id: number;
    title: string;
    tasks: {
        id: number;
        title: string;
        body: string;
        laneId: number;
    }[];
    handleOnDragStart: (event: React.DragEvent, id: number) => void;
    handleOnDragOver: (event: React.DragEvent) => void;
    handleOnDrop: (event: React.DragEvent, laneId: number) => void;
}

export default function Lane({ id, title, tasks, handleOnDragStart, handleOnDragOver, handleOnDrop }: LaneProps) {
    return (
        <div
            className="bg-blue-100 p-4"
            onDragOver={handleOnDragOver}
            onDrop={(event) => handleOnDrop(event, id)}
        >
            <h2 className="text-center text-xl font-bold mb-4">{title}</h2>
            <div>
                {
                    tasks.map((task) => {
                        return (
                            <Task
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                body={task.body}
                                laneId={task.laneId}
                                handleOnDragStart={handleOnDragStart}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}