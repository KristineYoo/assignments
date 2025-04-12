import React, { useState, useEffect } from 'react';
import { HomeworkItem, homeworkData, updateHomeworkStatus } from '../data/homeworkData';
import CompletedTasksGraph from './completedTasksGraph';
import FavoriteIcon from '@mui/icons-material/Favorite';

const HomeworkTracker: React.FC = () => {
    // Load data from localStorage or use the initial data if not available
    const loadHomeworkData = (): HomeworkItem[] => {
        const savedData = localStorage.getItem('homeworkData');
        return savedData ? JSON.parse(savedData) : homeworkData;
    };

    const [tasks, setTasks] = useState<HomeworkItem[]>(loadHomeworkData);
    const [activeTab, setActiveTab] = useState<'Assigned' | 'Completed'>('Assigned');

    // Save tasks to localStorage whenever the tasks state changes
    useEffect(() => {
        localStorage.setItem('homeworkData', JSON.stringify(tasks));
    }, [tasks]);

    const handleStatusChange = async (id: number, newStatus: HomeworkItem['status']) => {
        await updateHomeworkStatus(id, newStatus);
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, status: newStatus } : task
            )
        );
    };

    const assignedTasks = tasks.filter((item) => item.status !== 'Completed')
        .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
    const completedTasks = tasks.filter((item) => item.status === 'Completed')
        .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

    // Color mapping for classes
    const classColors: { [className: string]: string } = {
        'Computer Programming II': '#ba6a8d',
        'Comp & Info Design III': '#7b824d',
        'Univ101': '#f7f1ad',
        'Biology': '#bd4042',
        'Calculus III': '#f2cede',
        'English 103': '#b9abd9',
    };

    // Style for the highlighted class name
    const highlightedClassStyle = (className: string): React.CSSProperties => ({
        backgroundColor: classColors[className] || 'transparent',
        borderRadius: '15px',
        padding: '3px 8px',
        display: 'inline-block',
    });

    const handleTestsQuizzesChange = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, testsQuizzes: !task.testsQuizzes } : task
            )
        );
    };

    return (
        <div>
            <p style={{ marginTop: '110px', marginBottom: '-138px', textAlign: 'right' }}> 🍸🫒🪷🧘🏼‍♀️ </p>

            <div style={containerStyle}>
                {/* Tabs */}
                <div style={tabsContainerStyle}>
                    <button
                        style={{
                            ...tabStyle,
                            ...(activeTab === 'Assigned' ? activeTabStyle : {}),
                        }}
                        onClick={() => setActiveTab('Assigned')}
                    >
                        Assigned Tasks
                    </button>
                    <button
                        style={{
                            ...tabStyle,
                            ...(activeTab === 'Completed' ? activeTabStyle : {}),
                        }}
                        onClick={() => setActiveTab('Completed')}
                    >
                        Completed Tasks
                    </button>
                </div>

                {/* Content */}
                <div style={contentContainerStyle}>
                    {activeTab === 'Assigned' && (
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={tableHeaderStyle}>
                                        Class<span style={iconStyle}><FavoriteIcon /></span>
                                    </th>
                                    <th style={tableHeaderStyle}>
                                        Assignment<span style={iconStyle}><FavoriteIcon /></span>
                                    </th>
                                    <th style={tableHeaderStyle}>
                                        Due Date<span style={iconStyle}><FavoriteIcon /></span>
                                    </th>
                                    <th style={tableHeaderStyle}>
                                        Status<span style={iconStyle}><FavoriteIcon /></span>
                                    </th>
                                    <th style={tableHeaderStyle}>
                                        Points<span style={iconStyle}><FavoriteIcon /></span>
                                    </th>
                                    <th style={tableHeaderStyle}>
                                        Tests & Quizzes<span style={iconStyle}><FavoriteIcon /></span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {assignedTasks.map((item) => (
                                    <tr key={item.id} style={item.testsQuizzes ? { backgroundColor: '#c43f33' } : {}}>
                                        <td style={tableCellStyle}>
                                            <span style={highlightedClassStyle(item.class)}>{item.class}</span>
                                        </td>
                                        <td style={tableCellStyle}>{item.assignment}</td>
                                        <td style={tableCellStyle}>{item.dueDate}</td>
                                        <td style={tableCellStyle}>
                                            <select
                                                style={selectStyle}
                                                value={item.status}
                                                onChange={(e) =>
                                                    handleStatusChange(item.id, e.target.value as HomeworkItem['status'])
                                                }
                                            >
                                                <option value="Not Started">Not Started</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                        </td>
                                        <td style={tableCellStyle}>{item.points}</td>
                                        {/* Checkbox for Tests & Quizzes */}
                                        <td style={tableCellStyle}>
                                            <input
                                                type="checkbox"
                                                checked={item.testsQuizzes}
                                                onChange={() => handleTestsQuizzesChange(item.id)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    {activeTab === 'Completed' && (
                        // Render CompletedTasksGraph for completed assignments
                        <CompletedTasksGraph
                            completedTasks={completedTasks}
                            onStatusChange={handleStatusChange}
                            onTestsQuizzesChange={handleTestsQuizzesChange}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

// Styles (unchanged except for icon adjustments)
const containerStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '100px',
    boxSizing: 'border-box',
};

const tabsContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
};

const tabStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#fadadd',
    color: 'black',
    border: 'none',
    borderRadius: '5px 5px 0 0',
    cursor: 'pointer',
    marginRight: '5px',
};

const activeTabStyle: React.CSSProperties = {
    backgroundColor: '#faeded',
    color: 'black',
};

const contentContainerStyle: React.CSSProperties = {
    minHeight: '500px',
};

const tableStyle: React.CSSProperties = {
    width: '1500px',
    borderCollapse: 'collapse',
};

const tableHeaderStyle: React.CSSProperties = {
    backgroundColor: '#faeded',
    padding: '15px',
    borderBottom: '2px solid #ddd',
    textAlign: 'center',
};

const tableCellStyle: React.CSSProperties = {
    padding: '4px',
    borderBottom: '1px solid #ddd',
};

const selectStyle: React.CSSProperties = {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
};

const iconStyle: React.CSSProperties = {
    marginLeft: '5px',
    position: 'relative',
    top: '7px',
};

export default HomeworkTracker;
