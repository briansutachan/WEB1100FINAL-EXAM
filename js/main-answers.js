// GradeBook
class Student{
    constructor(firstName, lastName, id){
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
    }
}

class Assignment{
    constructor(id, urlLink, homeWork, grade){
        this,id = id
        this.urlLink = urlLink
        this.homeWork = homeWork
        this.grade = grade
    }
}


class Gradebook{
    constructor(courseCode, courseId, instructorName){
        this.courseCode = courseCode
        this.courseId = courseId
        this.instructorName = instructorName
        this.assignment = []
    }
}

