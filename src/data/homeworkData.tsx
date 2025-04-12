import homeworkDataJson from './data.json';

export interface HomeworkItem {
    id: number;
    class: string;
    assignment: string;
    dueDate: string;
    status: 'Not Started' | 'In Progress' | 'Completed';
    points: number;
    testsQuizzes?: boolean;
}

// Initialize homeworkData with the JSON data
export let homeworkData: HomeworkItem[] = homeworkDataJson as HomeworkItem[];

// Function to update homework status in the JSON file
export const updateHomeworkStatus = async (id: number, newStatus: 'Not Started' | 'In Progress' | 'Completed') => {
    const apiUrl = 'http://localhost:3001/updateHomeworkStatus';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, newStatus }),
        });

        if (response.ok) {
            console.log(`Homework item with id ${id} updated to status ${newStatus}`);
            // Update local homeworkData array
            homeworkData = homeworkData.map(item =>
                item.id === id ? { ...item, status: newStatus } : item
            );
        } else {
            console.error(`Failed to update homework status: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error("There was an error updating the homework status:", error);
    }
};
