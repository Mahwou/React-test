import { memo, FormEvent } from "react"

import Student from "../system/domaine/Student"
import Tag from "./Tag"

import { useInput } from "../system/hook"

interface PropType {
  student: Student;
  onShow: Function;
  onSubmit: Function
}


const StudentComponent = ({ student, onShow, onSubmit }: PropType) => {

  const [tag, resetTag] = useInput('')

  const _onShow = (): void => onShow(student.id)

  const _onSubmit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault()
    if (tag.value) {
      onSubmit(student.id, tag.value)
      resetTag()
    }
    else
      alert("tag can't be null")
  }

  return (
    <div className="d-flex justify-content-between p-3 AppBorder">
      <div className="d-flex justify-content-between">
        <img src={student.pic} alt="" className="Applogo" />
        <div className="ps-3">
          <h2 className="AppName">{student.fullName}</h2>
          <div className="list">
            <span>Email:{student.email}</span>
            <span>Compagny:{student.company}</span>
            <span>Skill:{student.skill}</span>
            <span>Average:{student.average()}%</span>
          </div>
          <div className="list">
            {
              <div className="my-2">
                {student.tags.map((tag: string, index: number) => <Tag tag={tag} key={index} />)}
              </div>
            }

            {
              student.show && <div >
                {student.grades.map((stat: string, index: number) => <span key={index + 1}>Test&nbsp;{index + 1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{stat}%</span>)}
              </div>
            }
          </div>


          <form onSubmit={_onSubmit}>
            <input placeholder="new tag"  {...tag} className="AppInputTag list" />
          </form>

        </div>
      </div>
      <div onClick={_onShow} className="Appcursor">
        <i className={!student.show ? "fa fa-plus" : "fa fa-minus"} aria-hidden="true"></i>
      </div>
    </div >
  )
}

export default memo(
  StudentComponent, (
  (prevProps: Readonly<React.PropsWithChildren<PropType>>,
    nextProps: Readonly<React.PropsWithChildren<PropType>>
  ) => prevProps.student.show !== nextProps.student.show
)
)