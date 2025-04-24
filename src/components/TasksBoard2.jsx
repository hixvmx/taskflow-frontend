import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import BoardHeader from './TasksBoard/BoardHeader';
import CategoryTitle from './TasksBoard/TasksList/Category/CategoryTitle';
import axiosClient from '../lib/axiosClient';


// Task Component
const Task = ({ task, ...props }) => {
    return (
        <div {...props}>
            <div className="text-sm font-medium text-gray-900 mb-1">{task.title}</div>
            <div className="text-xs text-gray-500 mb-2">{task.description}</div>
        </div>
    );
};

// TaskList Component
const TaskList = ({ category, moveTask, setNewTask }) => {
    return (
        <div className="group w-72 max-w-72 min-w-72 bg-white rounded-md shadow over">
            <CategoryTitle name={category.name} slug={category.slug} />
            <div className="p-2 space-y-2 max-h-[calc(100vh-220px)] overflow-y-auto">
                <Droppable droppableId={category.slug}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="flex flex-col gap-2"
                        >
                            {category.tasks.map((task, index) => (
                                <Draggable key={task.slug} draggableId={task.slug} index={index}>
                                    {(provided, snapshot) => <Task
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`${snapshot.isDragging ? 'opacity-50' : ''
                                            } bg-gray-100 hover:bg-gray-200 p-3 rounded shadow-sm hover:shadow cursor-pointer select-none`}
                                        style={{
                                            ...provided.draggableProps.style,
                                            border: snapshot.isDragging ? "2px solid currentColor" : "0px solid currentColor",
                                        }}
                                        task={task}
                                    />}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <button onClick={() => setNewTask(category.slug)} className="w-full text-left bg-gray-300 hover:bg-gray-400 rounded shadow-sm hover:shadow cursor-pointer px-3 py-0 h-0 overflow-y-hidden opacity-0 group-hover:opacity-100 group-hover:py-3 group-hover:h-auto transision-all duration-200">
                    <div className="text-sm font-medium text-gray-900">Add New Task</div>
                </button>
            </div>
        </div>
    );
};

// Main Task Board
const TaskBoard = ({ categories, setCategories, toggleCategoryForm, setNewTask }) => {
    // Function to handle the task drag and drop
    const onDragEnd = async (result) => {
        const { destination, source } = result;

        // If dropped outside a droppable area
        if (!destination) return;

        // If dropped within the same list (same category)
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        // Get the start (original) and end (destination) categories
        const startCategory = categories.find(
            (category) => category.slug === source.droppableId
        );
        const endCategory = categories.find(
            (category) => category.slug === destination.droppableId
        );

        // If moving within the same category
        if (startCategory.slug === endCategory.slug) {
            const [removedTask] = startCategory.tasks.splice(source.index, 1);
            endCategory.tasks.splice(destination.index, 0, removedTask);
        } else {
            // If moving between different categories
            const [removedTask] = startCategory.tasks.splice(source.index, 1);
            // Add the task to the destination category
            endCategory.tasks.splice(destination.index, 0, removedTask);
        }

        // Update the state with the new categories order
        setCategories([...categories]);

        // Prepare the data to send to the backend
        const updatedCategories = categories.map((category) => {
            return {
                slug: category.slug,
                tasks: category.tasks.map((task, index) => ({
                    slug: task.slug,
                    rank: index + 1,
                })),
            };
        });

        // save changes
        try {
            await axiosClient.put('/api/tasks/update-order', {
                categories: updatedCategories,
            });
            // console.log('Order updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating task order:', error);
        }
    };

    return (
        <div className="">
            <BoardHeader />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="w-full flex items-start space-x-4 overflow-x-auto pb-4">
                        {categories.map((category) => (
                            <TaskList
                                key={category.slug}
                                category={category}
                                moveTask={onDragEnd}
                                setNewTask={setNewTask}
                            />
                        ))}
                        <div className="group w-72 max-w-72 min-w-72">
                            <button
                                onClick={toggleCategoryForm}
                                className="w-full text-left bg-gray-300 hover:bg-gray-400 rounded shadow-sm hover:shadow cursor-pointer p-3">
                                <div className="text-sm font-medium text-gray-900">Add New Category</div>
                            </button>
                        </div>
                    </div>
                </DragDropContext>
            </div>
        </div>
    );
};

export default TaskBoard;
