// import-export in react

// کامپوننت ها در ری اکت میتوانند متغیر ، ثابت و یا تابع باشند
const COURSE_NAME = 'Math'
let sessionNumber = 3
const START_DATE = '1402-11-05'

export {COURSE_NAME}
export {sessionNumber}
export default START_DATE

// فانکشن ها را در زمان نوشتن میتوان اکسپورت نمود اما در متغیر ها نمیتوان ان ها را در زمان تعریف اکسپورت کرد

const teacher = {
    fisrtName: 'Hamid Reza',
    lastName: 'Izadi Matin'
}

export const showTeacherInfo = () => `${teacher.fisrtName} ${teacher.lastName}`

// export function showTeacherInfo() {
//     return `${teacher.fisrtName} ${teacher.lastName}`
// }

export const course = {
    name: COURSE_NAME,
    currentSession : sessionNumber,
    startDate: START_DATE,
    teacher 
}