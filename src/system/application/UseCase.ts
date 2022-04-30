

import Repository from './Repository'
import Student from '../domaine/Student'
import { StudentType } from './Interface'

class ListStudent {

  repository: Repository

  constructor() {
    this.repository = new Repository()
  }

  async execute(): Promise<Student[]> {
    const request = await this.repository.list()

    return request.map((student: StudentType) => new Student(student))
  }
}

class ToggleStudent {

  execute(data: Student[], id: number): Student[] {
    return data.map((student: Student) => {
      if (student.id === id)
        student.toggle()

      return student
    })
  }
}



class SearchByTagAndNameStudent {

  execute(data: Student[], tag: string, name:string): Student[] {
    return data.filter((student: Student) => student.fullName.toLowerCase().includes(name.toLowerCase()) && student.findTag(tag))
  }
}

class CreateTag {

  execute(data: Student[], studentId: number, tag: string): Student[] {
    return data.map((student: Student) => {
      if (student.id === studentId)
        student.addNewTag(tag)

      return student
    })
  }
}


export const ListAction = new ListStudent()
export const ToggleAction = new ToggleStudent()
export const SearchAction = new SearchByTagAndNameStudent()
export const NewTagAction = new CreateTag()