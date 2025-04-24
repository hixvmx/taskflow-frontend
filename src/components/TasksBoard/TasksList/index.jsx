import { useEffect, useState } from "react";
import Category from "./Category";
import axiosClient from "../../../lib/axiosClient";


export default function TasksList() {

    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getAllCategories = async () => {
        try {
            setIsLoading(true)


            const response = await axiosClient.get('/api/categories');
            setCategories(response.data ?? []);

        } catch (err) {
            console.log("Error:", err);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {isLoading ? suspense() :
                <div className="w-full flex items-start space-x-4 overflow-x-auto pb-4">
                    {categories?.map(c => <Category key={c.slug} name={c.name} tasks={c.tasks} />)}
                    <div className="group w-72 max-w-72 min-w-72">
                        <button className="w-full text-left bg-gray-300 hover:bg-gray-400 rounded shadow-sm hover:shadow cursor-pointer p-3">
                            <div className="text-sm font-medium text-gray-900">Add New Category</div>
                        </button>
                    </div>
                </div>
            }
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