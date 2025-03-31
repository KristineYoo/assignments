// homeworkData.ts

export interface HomeworkItem {
    id: number;
    class: string;
    assignment: string;
    dueDate: string; // Changed to string
    status: 'Not Started' | 'In Progress' | 'Completed';
    points: number;
    testsQuizzes?: boolean; // Optional field

}

const originalHomeworkData: HomeworkItem[] = [

    { id: 3, class: 'Comp & Info Design III', assignment: 'Week 1 Homework - Reflection', dueDate: '04/07/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 4, class: 'Comp & Info Design III', assignment: 'Week 1 Lab', dueDate: '04/07/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 5, class: 'Univ101', assignment: 'Univ C1101 Spring Syllabus Agreement', dueDate: '04/08/2025 9:00 AM', status: 'Not Started', points: 5 },
    { id: 6, class: 'Univ101', assignment: 'Wellness Assessment', dueDate: '04/08/2025 9:00 AM', status: 'Not Started', points: 5 },
    { id: 7, class: 'Computer Programming II', assignment: 'Homework 1', dueDate: '04/08/2025 11:59 PM', status: 'Not Started', points: 100 },
    { id: 9, class: 'Comp & Info Design III', assignment: 'Week 2 Homework - Interview Question', dueDate: '04/14/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 10, class: 'Comp & Info Design III', assignment: 'Week 2 Lab', dueDate: '04/14/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 11, class: 'Univ101', assignment: 'Co-op Panel Questions', dueDate: '04/15/2025 9:00 AM', status: 'Not Started', points: 10 },
    { id: 12, class: 'Univ101', assignment: 'Peer Mentor Check In', dueDate: '04/16/2025 9:00 AM', status: 'Not Started', points: 10 },
    { id: 14, class: 'Comp & Info Design III', assignment: 'Week 3 Homework - Team Evaluation', dueDate: '04/21/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 15, class: 'Comp & Info Design III', assignment: 'Week 3 Lab', dueDate: '04/21/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 16, class: 'Univ101', assignment: 'Long-Term SMART Goal', dueDate: '04/22/2025 9:00 AM', status: 'Not Started', points: 20 },
    { id: 17, class: 'Computer Programming II', assignment: 'Homework 2', dueDate: '04/22/2025 11:59 PM', status: 'Not Started', points: 100 },
    { id: 19, class: 'Comp & Info Design III', assignment: 'Week 4 Homework - Reflection', dueDate: '04/28/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 20, class: 'Comp & Info Design III', assignment: 'Week 4 Lab', dueDate: '04/28/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 21, class: 'Computer Programming II', assignment: 'Homework 3', dueDate: '04/29/2025 11:59 PM', status: 'Not Started', points: 100 },
    { id: 22, class: 'Comp & Info Design III', assignment: 'Week 5 Homework - Interview Question', dueDate: '05/05/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 23, class: 'Comp & Info Design III', assignment: 'Week 5 Lab', dueDate: '05/05/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 25, class: 'Comp & Info Design III', assignment: 'Week 6 Homework - Team Evaluation', dueDate: '05/12/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 26, class: 'Comp & Info Design III', assignment: 'Week 6 Lab', dueDate: '05/12/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 27, class: 'Computer Programming II', assignment: 'Homework 4', dueDate: '05/13/2025 11:59 PM', status: 'Not Started', points: 100 },
    { id: 29, class: 'Comp & Info Design III', assignment: 'Week 7 Homework - Reflection', dueDate: '05/19/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 30, class: 'Comp & Info Design III', assignment: 'Week 7 Lab', dueDate: '05/19/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 31, class: 'Univ101', assignment: 'Self Care Activity', dueDate: '05/20/2025 9:00 AM', status: 'Not Started', points: 15 },
    { id: 33, class: 'Comp & Info Design III', assignment: 'Week 8 Homework - Interview Question', dueDate: '05/26/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 34, class: 'Comp & Info Design III', assignment: 'Week 8 Lab', dueDate: '05/26/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 36, class: 'Comp & Info Design III', assignment: 'Week 9 Homework - Team Evaluation', dueDate: '06/02/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 37, class: 'Comp & Info Design III', assignment: 'Week 9 Lab', dueDate: '06/02/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 38, class: 'Univ101', assignment: 'Letter of Advice to Yourself', dueDate: '06/03/2025 9:00 AM', status: 'Not Started', points: 20 },
    { id: 39, class: 'Computer Programming II', assignment: 'Homework 5', dueDate: '06/03/2025 11:59 PM', status: 'Not Started', points: 100 },
    { id: 40, class: 'Comp & Info Design III', assignment: 'Week 10 Homework - Reflection', dueDate: '06/09/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 41, class: 'Calculus III', assignment: 'Homework 1', dueDate: '04/09/2025 11:59 PM', status: 'Not Started', points: 10 },
    { id: 42, class: 'Calculus III', assignment: 'Exam 1', dueDate: '04/24/2025 11:00 AM', status: 'Not Started', points: 25, testsQuizzes: true },
    { id: 43, class: 'Calculus III', assignment: 'Exam 2', dueDate: '05/22/2025 11:00 AM', status: 'Not Started', points: 25, testsQuizzes: true },
    { id: 44, class: 'Biology', assignment: 'Exam 1', dueDate: '04/30/2025 8:00 AM', status: 'Not Started', points: 10, testsQuizzes: true },
    { id: 45, class: 'Biology', assignment: 'Exam 2', dueDate: '05/28/2025 8:00 AM', status: 'Not Started', points: 25, testsQuizzes: true },
    { id: 46, class: 'Calculus III', assignment: 'Week 2 Quiz (1)', dueDate: '04/10/2025 11:00 AM', status: 'Not Started', points: 4, testsQuizzes: true },
    { id: 46, class: 'Calculus III', assignment: 'Week 3 Quiz (2)', dueDate: '04/17/2025 11:00 AM', status: 'Not Started', points: 4, testsQuizzes: true },
    { id: 46, class: 'Calculus III', assignment: 'Week 5 Quiz (3)', dueDate: '05/01/2025 11:00 AM', status: 'Not Started', points: 4, testsQuizzes: true },
    { id: 46, class: 'Calculus III', assignment: 'Week 6 Quiz (4)', dueDate: '05/08/2025 11:00 AM', status: 'Not Started', points: 4, testsQuizzes: true },
    { id: 46, class: 'Calculus III', assignment: 'Week 7 Quiz (5)', dueDate: '05/15/2025 11:00 AM', status: 'Not Started', points: 4, testsQuizzes: true },
    { id: 46, class: 'Calculus III', assignment: 'Week 9 Quiz (6)', dueDate: '05/29/2025 11:00 AM', status: 'Not Started', points: 4, testsQuizzes: true },
    { id: 47, class: "Computer Programming II", assignment: "Week 1 Reading Quiz", dueDate: "04/06/2025 11:59 PM", status: "Not Started", points: 10, testsQuizzes: true },
    { id: 48, class: "Computer Programming II", assignment: "Week 3 Reading Quiz", dueDate: "04/13/2025 11:59 PM", status: "Not Started", points: 10, testsQuizzes: true },
    { id: 49, class: "Computer Programming II", assignment: "Week 4 Reading Quiz", dueDate: "04/20/2025 11:59 PM", status: "Not Started", points: 10, testsQuizzes: true },
    { id: 50, class: "Computer Programming II", assignment: "Week 5 Reading Quiz", dueDate: "04/27/2025 11:59 PM", status: "Not Started", points: 10, testsQuizzes: true },
    { id: 51, class: "Computer Programming II", assignment: "Week 7 Reading Quiz", dueDate: "05/11/2025 11:59 PM", status: "Not Started", points: 10, testsQuizzes: true },
    { id: 52, class: "Computer Programming II", assignment: "Week 8 Reading Quiz", dueDate: "05/18/2025 11:59 PM", status: "Not Started", points: 10, testsQuizzes: true },
    { id: 53, class: "Computer Programming II", assignment: "Week 9 Reading Quiz", dueDate: "05/25/2025 11:59 PM", status: "Not Started", points: 10, testsQuizzes: true },
    { id: 54, class: "Computer Programming II", assignment: "Week 10 Reading Quiz", dueDate: "06/01/2025 11:59 PM", status: "Not Started", points: 10, testsQuizzes: true },
    { id: 55, class: "Computer Programming II", assignment: "Midterm", dueDate: "05/05/2025 9:00 AM", status: "Not Started", points: 25, testsQuizzes: true },
    { id: 56, class: "Computer Programming II", assignment: "Week 2 Reading Quiz", dueDate: "04/06/2025 11:59 PM", status: "Not Started", points: 10 },
    { id: 56, class: "Computer Programming II", assignment: "Pre-Lecture Recording Week 1", dueDate: "03/31/2025 09:00 AM", status: "Not Started", points: 0 },
    { id: 57, class: "Computer Programming II", assignment: "Pre-Lecture Recording Week 2", dueDate: "04/07/2025 09:00 AM", status: "Not Started", points: 0 },
    { id: 58, class: "Computer Programming II", assignment: "Pre-Lecture Recording Week 3", dueDate: "04/14/2025 09:00 AM", status: "Not Started", points: 0 },
    { id: 59, class: "Computer Programming II", assignment: "Pre-Lecture Recording Week 4", dueDate: "04/21/2025 09:00 AM", status: "Not Started", points: 0 },
    { id: 60, class: "Computer Programming II", assignment: "Pre-Lecture Recording Week 5", dueDate: "04/28/2025 09:00 AM", status: "Not Started", points: 0 },
    { id: 62, class: "Computer Programming II", assignment: "Pre-Lecture Recording Week 7", dueDate: "05/12/2025 09:00 AM", status: "Not Started", points: 0 },
    { id: 63, class: "Computer Programming II", assignment: "Pre-Lecture Recording Week 8", dueDate: "05/19/2025 09:00 AM", status: "Not Started", points: 0 },
    { id: 64, class: "Computer Programming II", assignment: "Pre-Lecture Recording Week 9", dueDate: "05/26/2025 09:00 AM", status: "Not Started", points: 0 },
    { id: 65, class: "Computer Programming II", assignment: "Pre-Lecture Recording Week 10", dueDate: "06/02/2025 09:00 AM", status: "Not Started", points: 0 },
    { id: 66, class: "English 103", assignment: "Rhetorical Analysis of A Writing Experience", dueDate: "04/20/2025 11:59 PM", status: "Not Started", points: 10 },
    { id: 67, class: "English 103", assignment: "Proposal", dueDate: "05/18/2025 11:59 PM", status: "Not Started", points: 15 },
    { id: 68, class: "English 103", assignment: "Presentation and Workshop", dueDate: "05/22/2025 11:59 PM", status: "Not Started", points: 10 },
    { id: 69, class: "English 103", assignment: "Final Project", dueDate: "06/07/2025 11:59 PM", status: "Not Started", points: 10 },
    { id: 70, class: "English 103", assignment: "Final Reflectiion", dueDate: "06/08/2025 11:59 PM", status: "Not Started", points: 10 },
    { id: 71, class: "Biology", assignment: "Video Lecture: Chapter 32 Part 1", dueDate: "04/02/2025 11:59 PM", status: "Not Started", points: 10 },
    { id: 72, class: "Biology", assignment: "Video Lecture: Chapter 32 Part 2", dueDate: "04/02/2025 11:59 PM", status: "Not Started", points: 10 },
    { id: 73, class: "Biology", assignment: "Week 1 HW: Homeostasis and Endocrine System ", dueDate: "04/07/2025 11:59 PM", status: "Not Started", points: 10 },
    { id: 74, class: "Biology", assignment: "Homeostasis and Endocrine Quiz 1 ", dueDate: "04/07/2025 11:59 PM", status: "Not Started", points: 10, testsQuizzes: true },

]



const loadHomeworkData = (): HomeworkItem[] => {
    const storedData = localStorage.getItem('homeworkData');
    return storedData ? JSON.parse(storedData) : originalHomeworkData;
};

export const homeworkData: HomeworkItem[] = loadHomeworkData();