export interface Student extends Envelope {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    course1: string;
    course1Grade: string;
    course2: string;
    course2Grade: string;
    course1Credits: number;
    course2Credits: number;
    course2ID: number;
    course1ID: number;

}

export interface Envelope {

    errorMessage: string
    timeGenerated: Date

}

export class StudentDisEnrollMent {
    enrollmentNumber: number;
    studentId: number;
    comment: string;

    /**
     *
     */
    constructor(enrollmentNumber: number, studentId: number, comment: string) {

        this.enrollmentNumber = enrollmentNumber;
        this.comment = comment;
        this.studentId = studentId;

    }
}

export interface EditStudentDto {
    studentId: number;
    firstName: string;
    lastName: string;

}

export interface Course {

    courseID: number;
    title: string;
    credits: number;
    enrollments: any;

    // {"courseID":1045,"title":"Calculus","credits":4,"enrollments":null


}

export interface CourseTransfer {
    currentCourseID: number;
    newCourseID: number;
    studentId: number;

}