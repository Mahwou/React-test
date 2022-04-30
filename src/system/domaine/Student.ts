
import { StudentType } from "../application/Interface"

export default class Student {

 
  email: string
  pic: string
  id: number
  company: string
  skill: string
  grades: string[]
  show: boolean
  fullName: string
  tags: string[]

  constructor(data: StudentType) {
    
    this.fullName = `${data.firstName} ${data.firstName}`.toUpperCase()
    this.email = data.email
    this.company = data.company
    this.skill = data.skill
    this.pic = data.pic
    this.id = parseInt(data.id)
    this.grades = data.grades
    this.show = false
    this.tags= []
  }

  average() {
    return this.grades.reduce((acc: number, value: string) => acc + parseInt(value), 0) / this.grades.length
  }

  toggle() {
    this.show = !this.show
  }

  addNewTag(tag:string){
    this.tags.push(tag)
  }

  findTag(tagging:string): boolean {
    
    if (tagging){
      const hasTag = this.tags.filter((tag:string) => tag.toLowerCase().includes(tagging.toLowerCase()))
      return hasTag.length ? true : false
    }

    console.log(true)

    return true
  }
}