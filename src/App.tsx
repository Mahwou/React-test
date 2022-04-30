import React, { useState, useEffect, Suspense } from 'react';

import ErrorBoundary from './components/ErrorBoundary'
import StudentComponent from './components/StudentListComponent'

import {
  ToggleAction,
  ListAction,
  SearchAction,
  NewTagAction
} from "./system/application/UseCase"

import { useInput } from "./system/hook"

import Student from "./system/domaine/Student"

import './App.css';

export default function App() {

  const [students, setStudents] = useState<Student[]>([])
  const [initialStudents, setInitialStudents] = useState<Student[]>([])

  const [name, resetName] = useInput('')
  const [tag, resetTag] = useInput('')

  const _init = async () => {
    const data = await ListAction.execute()
    setStudents(data)
    setInitialStudents(data)
  }

  const _onShow = (studentId: number) => {
    setStudents(ToggleAction.execute(students, studentId))
  }
  const _onSubmit = (studentId: number, tag:string) => setStudents(NewTagAction.execute(students, studentId, tag))

  useEffect(() => {
    _init()
  }, [])

  useEffect(() => {
    if (!(tag.value && name.value)) {
      setStudents(initialStudents)
    }

  }, [tag.value, name.value])

  useEffect(() => {
    if (tag.value)
      setStudents(SearchAction.execute(initialStudents, tag.value, name.value))

  }, [tag.value])

  useEffect(() => {
    if (name.value)
      setStudents(SearchAction.execute(initialStudents, tag.value, name.value))
  }, [name.value])

  return <ErrorBoundary>
    <Suspense fallback={<p>Loading </p>}>

      <div className="App container AppScrool pt-3 my-3">
        <div className = "AppInputSearch">
          <input className="AppInput py-2" placeholder="Search by name" {...name} />
          <input className="AppInput py-2" placeholder="Search by tag"  {...tag} />
        </div>

        {
          students.map((student: Student) => <StudentComponent onShow={_onShow} onSubmit = {_onSubmit} student={student} key={student.id} />)
        }
      </div>
    </Suspense>
  </ErrorBoundary>



}