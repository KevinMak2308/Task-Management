import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import httpService from '../services/httpService';

const Task = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [taskStatus, setTaskStatus] = useState('');
    const [taskPrice, setTaskPrice]  = useState('');
    const [alphabeticSort, setAlphabeticSort] = useState('');

    //Asynkron funktion til at hente opgaver baseret på de givne filtre og nuværende side
    const fetchTasks = async (page, taskStatus, alphabeticSort, taskPrice) => {
        try {
            //Kalder API'et for at hente opgaver med de specificerede parametre
            const response = await httpService.get(
                'tasks', {
                    params: {
                        page,
                        tasksPerPage: 2,
                        status: taskStatus,
                        alphabeticSort,
                        price: taskPrice
                    }
                }
            );  
            
            // Opdaterer state med de hentede opgaver og det totale antal sider
            const { tasks, totalPages } = response.data;
            setTasks(tasks);
            setTotalPages(totalPages);
        } catch(error) {
            console.log('Failed to fetch tasks: ', error);
        }
    };

    // useEffect til at hente opgaver, når komponentet mountes eller når en afhængighed ændres
    useEffect(() => {
        fetchTasks(currentPage, taskStatus, alphabeticSort, taskPrice);
    }, [currentPage, taskStatus, alphabeticSort, taskPrice]);

    // useEffect til at nulstille den nuværende side til 1, når filtre ændres
    useEffect(() => {
        setCurrentPage(startIndex => {
            if(startIndex !== 1) {
                return 1;
            }
            return startIndex;
        })
    }, [taskStatus, alphabeticSort, taskPrice]);

    // Funktion til at håndtere sideændringer
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return(
        <div className='task-container'>
            {/* Label og select for status filter */}
            <label className='filter-label'>
                Status:
                <select 
                    value={taskStatus} 
                    onChange={(e) => setTaskStatus(e.target.value)}
                    className="filter-select"
                >
                    <option value="">None</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                </select>
            </label>
            
            {/* Label og select for alfabetisk sortering */}
            <label className='filter-label'>
                Title:
                <select 
                    value={alphabeticSort} 
                    onChange={(e) => setAlphabeticSort(e.target.value)}
                    className="filter-select"
                >
                    <option value="">None</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </label>
            
            {/* Label og select for pris filter */}
            <label className='filter-label'>
                Price:
                <select 
                    value={taskPrice} 
                    onChange={(e) => setTaskPrice(e.target.value)}
                    className="filter-select"
                >
                    <option value="">None</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </label>
            
            {/* Mapper igennem tasks array, og udskriver hvert element */}
            {tasks.map((task) => (
                <div key={task.id} className="task-item">
                    <div className="task-details">
                        <span className="task-title">{task.title}</span>
                        <span>Status: {task.status}</span>
                        <span>Price: ${task.price}</span>
                    </div>
                </div>
            ))}

            {/* Implementere Pagination Component her */}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Task;
