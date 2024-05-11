interface TagProps {
    text: string,
    id: string
}



const Tag : React.FC<TagProps> = ({text, id}) => {
  return (
    <div className="text-purp font-medium text-lg bg-purp bg-opacity-5 px-3 py-1 border-[1px] rounded-full border-purp border-opacity-30" id={id}>{text}</div>
  )
}

export default Tag