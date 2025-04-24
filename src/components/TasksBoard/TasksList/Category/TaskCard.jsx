
export default function TaskCard({ task = {} }) {

    const { title, description } = task;

    return (
        <div className="bg-gray-100 hover:bg-gray-200 p-3 rounded shadow-sm hover:shadow cursor-pointer select-none">
            <div className="text-sm font-medium text-gray-900 mb-1">{title}</div>
            <div className="text-xs text-gray-500 mb-2">{description}</div>
        </div>
    )
}