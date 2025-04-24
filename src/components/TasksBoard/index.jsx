import { useEffect, useState } from "react";
import BoardHeader from "./BoardHeader";
import TasksList from "./TasksList";
import axiosClient from "../../lib/axiosClient";


export default function TasksBoard() {

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
        <div className="">
            <BoardHeader />
            <TasksList categories={{ loading: isLoading, value: categories }} />
        </div>
    )
}