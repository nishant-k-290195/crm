const d = new Date()
const day = d.getDay()
const dd = d.getDate()
const mm = d.getMonth()
const yy = d.getFullYear()

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const CurrentDate = () => {
  return (
    <h4>{days[day]} {months[mm]} {dd}, {yy}</h4>
  )
}

export default CurrentDate
