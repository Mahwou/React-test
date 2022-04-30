import axios from "axios"
import { StudentType } from "./Interface";

export default class Repository {


  async list(): Promise<StudentType[]> {
    try {
      const response = await axios.get<Array<StudentType>>('https://api.hatchways.io/assessment/students')
        .then((response: any) => response.data.students)
      return response
    } catch (error) {
      return []
    }

  }
}