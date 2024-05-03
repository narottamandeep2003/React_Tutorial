// Working with React Components - Props
export default function Box({data,id}) {
  return (
    <div>
        <span>hi {data.name}, age {data.age}</span>
        <br />
        <span>ID: {id}</span>
    </div>
  )
}
