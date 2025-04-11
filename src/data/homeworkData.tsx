import homeworkDataJson from './data.json';


const originalHomeworkData: HomeworkItem[] = homeworkDataJson as HomeworkItem[];

const loadHomeworkData = (): HomeworkItem[] => {
    const storedData = localStorage.getItem('homeworkData');
    return storedData ? JSON.parse(storedData) : originalHomeworkData;
};

export const homeworkData: HomeworkItem[] = loadHomeworkData();


// Assuming you have a function to update the status, like this:
export const updateHomeworkStatus = (id: number, newStatus: 'Not Started' | 'In Progress' | 'Completed') => {
    // Find the homework item in the array
    const itemIndex = homeworkData.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        // Update the status of the item in the array
        homeworkData[itemIndex].status = newStatus;

        // Update localStorage
        localStorage.setItem('homeworkData', JSON.stringify(homeworkData));
    } else {
        console.log(`Homework item with id ${id} not found`);
    }
};

export interface HomeworkItem {
    id: number;
    class: string;
    assignment: string;
    dueDate: string; // Changed to string
    status: 'Not Started' | 'In Progress' | 'Completed';
    points: number;
    testsQuizzes?: boolean; // Optional field
}
