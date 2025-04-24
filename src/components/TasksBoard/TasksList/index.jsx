import Category from "./Category";

export default function TasksList() {

    const tasks = [
        {
            id: 15,
            name: "To-Do",
            tasks: [
                {
                    id: 15,
                    title: 'Implement authentication',
                    desc: 'Set up user authentication and authorization',
                    tags: '',
                },
                {
                    id: 25,
                    title: 'Design system components',
                    desc: 'Create reusable UI components for the application',
                    tags: '',
                },
                {
                    id: 35,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
                {
                    id: 45,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
            ],
        },
        {
            id: 25,
            name: "Doing",
            tasks: [
                {
                    id: 55,
                    title: 'Implement authentication',
                    desc: 'Set up user authentication and authorization',
                    tags: '',
                },
                {
                    id: 65,
                    title: 'Design system components',
                    desc: 'Create reusable UI components for the application',
                    tags: '',
                },
                {
                    id: 75,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
                {
                    id: 85,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
            ],
        },
        {
            id: 15,
            name: "To-Do",
            tasks: [
                {
                    id: 15,
                    title: 'Implement authentication',
                    desc: 'Set up user authentication and authorization',
                    tags: '',
                },
                {
                    id: 25,
                    title: 'Design system components',
                    desc: 'Create reusable UI components for the application',
                    tags: '',
                },
                {
                    id: 35,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
                {
                    id: 45,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
            ],
        },
        {
            id: 25,
            name: "Doing",
            tasks: [
                {
                    id: 55,
                    title: 'Implement authentication',
                    desc: 'Set up user authentication and authorization',
                    tags: '',
                },
                {
                    id: 65,
                    title: 'Design system components',
                    desc: 'Create reusable UI components for the application',
                    tags: '',
                },
                {
                    id: 75,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
                {
                    id: 85,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
            ],
        },
        {
            id: 15,
            name: "To-Do",
            tasks: [
                {
                    id: 15,
                    title: 'Implement authentication',
                    desc: 'Set up user authentication and authorization',
                    tags: '',
                },
                {
                    id: 25,
                    title: 'Design system components',
                    desc: 'Create reusable UI components for the application',
                    tags: '',
                },
                {
                    id: 35,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
                {
                    id: 45,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
            ],
        },
        {
            id: 25,
            name: "Doing",
            tasks: [
                {
                    id: 55,
                    title: 'Implement authentication',
                    desc: 'Set up user authentication and authorization',
                    tags: '',
                },
                {
                    id: 65,
                    title: 'Design system components',
                    desc: 'Create reusable UI components for the application',
                    tags: '',
                },
                {
                    id: 75,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
                {
                    id: 85,
                    title: 'Design Home Page',
                    desc: '',
                    tags: '',
                },
            ],
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="w-full flex items-start space-x-4 overflow-x-auto pb-4">
                {!tasks ? 'Not Found!' : (
                    tasks?.map((i) => <Category key={i.id} name={i.name} tasks={i.tasks} />)
                )}

                <div className="group w-72 max-w-72 min-w-72">
                    <button className="w-full text-left bg-gray-300 hover:bg-gray-400 rounded shadow-sm hover:shadow cursor-pointer p-3">
                        <div className="text-sm font-medium text-gray-900">Add New Category</div>
                    </button>
                </div>
            </div>
        </div>
    )
}