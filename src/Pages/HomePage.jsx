import Header from "../components/Header";
import TasksBoard from "../components/TasksBoard";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <TasksBoard />
        </div>
    )
}