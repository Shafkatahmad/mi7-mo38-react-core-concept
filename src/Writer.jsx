export default function Writer({writer}) {
  console.log(writer);
  return (
    <div>
      <h3>Writter: {writer.name}</h3>
      <p>age: {writer.age}</p>
    </div>
  )
}