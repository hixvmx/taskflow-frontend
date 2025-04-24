import CategoryTitle from "./CategoryTitle";
import TaskCard from "./TaskCard";

export default function Category({ name = "untitled", slug = '', tasks = [], addNew }) {
    return (
        <div className="group w-72 max-w-72 min-w-72">
            <div className="bg-white rounded-md shadow">
                <CategoryTitle {...{ name, slug }} />
                <div className="p-2 space-y-2 max-h-[calc(100vh-220px)] overflow-y-auto">
                    {!tasks ? 'Not Found!' : (
                        tasks?.map((i) => <TaskCard key={i.slug} task={i} />)
                    )}

                    <button onClick={() => addNew(slug)} className="w-full text-left bg-gray-300 hover:bg-gray-400 rounded shadow-sm hover:shadow cursor-pointer px-3 py-0 h-0 overflow-y-hidden opacity-0 group-hover:opacity-100 group-hover:py-3 group-hover:h-auto transision-all duration-200">
                        <div className="text-sm font-medium text-gray-900">Add New Task</div>
                    </button>
                </div>
            </div>
        </div>
    )
}