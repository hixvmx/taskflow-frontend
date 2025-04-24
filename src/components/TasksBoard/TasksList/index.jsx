import { useState } from "react";
import Category from "./Category";
import AddNewCategory from "../../Pages/Categories/AddNewCategory";
import AddNewTask from "../../Pages/Categories/AddNewCategory";


export default function TasksList({ categories }) {

    const [isAddNewOpen, setIsAddNewOpen] = useState(false)
    const toggle = () => setIsAddNewOpen(!isAddNewOpen);

    // store category slug
    const [addNewTask, setAddNewTask] = useState('');
    

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {categories?.loading ? suspense() :
                <div className="w-full flex items-start space-x-4 overflow-x-auto pb-4">
                    {categories?.value?.map(c => <Category key={c.slug} name={c.name} slug={c.slug} tasks={c.tasks} addNew={setAddNewTask} />)}
                    <div className="group w-72 max-w-72 min-w-72">
                        <button
                            onClick={toggle}
                            className="w-full text-left bg-gray-300 hover:bg-gray-400 rounded shadow-sm hover:shadow cursor-pointer p-3">
                            <div className="text-sm font-medium text-gray-900">Add New Category</div>
                        </button>
                    </div>
                </div>
            }

            {isAddNewOpen && (
                <AddNewCategory
                    close={toggle}
                />
            )}
            {addNewTask !== "" && (
                <AddNewTask
                    categorySlug={addNewTask}
                    close={() => setAddNewTask('')}
                />
            )}
        </div>
    )
}

const suspense = () => {
    return (
        <div className="group w-72 max-w-72 min-w-72">
            <p>Loading categories...</p>
        </div>
    )
}