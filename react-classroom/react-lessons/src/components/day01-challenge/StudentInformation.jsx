function StudentInformation(props){
    const {studentName, studentGrade, classSubject} = props
    return (
        <div>
                <p>Students Name: {studentName}</p>
                <p>Current Grade: {studentGrade}</p>
                <p>Subject: {classSubject}</p>
        </div>

    )
}

export default StudentInformation;