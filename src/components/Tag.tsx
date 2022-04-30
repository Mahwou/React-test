
import {memo} from "react"

type PropType = {
	tag:string
}

const Tag = ({tag}:PropType) => {
	return(
		<span className="tag p-1 mx-1">{tag}</span>
	)
}

export default memo(
	Tag,(
  (prevProps: Readonly<React.PropsWithChildren<PropType>>,
    nextProps: Readonly<React.PropsWithChildren<PropType>>
  ) => prevProps.tag !== nextProps.tag
)
)