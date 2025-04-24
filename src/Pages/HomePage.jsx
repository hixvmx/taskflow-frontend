import { useEffect, useState } from "react";
import Header from "../components/Header";
// import TasksBoard from "../components/TasksBoard";
import TasksBoard2 from "../components/TasksBoard2";
import axiosClient from "../lib/axiosClient";
import Suspense from "../components/Pages/Suspense";
import NoResults from "../components/Pages/NoResults";
import AddNewCategory from "../components/Pages/Tasks/AddNewTask";
import AddNewTask from "../components/Pages/Categories/AddNewCategory";


export default function HomePage() {

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

    const refreshCategories = () => {
        getAllCategories();
    };

    // State to control the visibility of the "Add New Category" form
    const [isCategoryFormOpen, setIsCategoryFormOpen] = useState(false);
    const toggleCategoryForm = () => setIsCategoryFormOpen(!isCategoryFormOpen);

    // state to store category slug to add new task
    const [newTask, setNewTask] = useState('');


    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            {isLoading ? <Suspense /> : !categories ? <NoResults /> : (
                <TasksBoard2
                    categories={categories}
                    setCategories={setCategories}
                    toggleCategoryForm={toggleCategoryForm}
                    setNewTask={setNewTask}
                />
            )}

            {isCategoryFormOpen && (
                <AddNewCategory
                    close={toggleCategoryForm}
                    refresh={refreshCategories}
                />
            )}
            {newTask !== "" && (
                <AddNewTask
                    categorySlug={newTask}
                    close={() => setNewTask('')}
                    refresh={refreshCategories}
                />
            )}
        </div>
    )
}