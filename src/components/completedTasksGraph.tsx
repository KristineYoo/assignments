import React from 'react';
import { HomeworkItem } from '../data/homeworkData';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface CompletedTasksGraphProps {
    completedTasks: HomeworkItem[]; // Prop for completed tasks
    onStatusChange: (id: number, newStatus: HomeworkItem['status']) => void; // Function to handle status changes
    onTestsQuizzesChange?: (id: number) => void; // Add this prop
}

const CompletedTasksGraph: React.FC<CompletedTasksGraphProps> = ({ completedTasks, onStatusChange, onTestsQuizzesChange }) => { // Include onTestsQuizzesChange
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

    return (
        <div style={contentContainerStyle}>
            <div style={containerStyle}>
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
                                Tests & Quizzes <span style={iconStyle}><FavoriteIcon /></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {completedTasks.map((item) => (
                            <tr key={item.id} style={item.testsQuizzes ? { backgroundColor: '#ffcccc' } : {}}>
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
                                            onStatusChange(item.id, e.target.value as HomeworkItem['status'])
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
                                        onChange={() => onTestsQuizzesChange && onTestsQuizzesChange(item.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Styles for the component
const containerStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '-10px',
    boxSizing: 'border-box',
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

const contentContainerStyle: React.CSSProperties = {
    minHeight: '500px',
};

export default CompletedTasksGraph;
