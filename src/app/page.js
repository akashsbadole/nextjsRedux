import styles from './page.module.css'
import AddUsers from './components/AddUsers'
import DisplayUsers from './components/DisplayUsers'

export default function Home() {
  return (
    <main>
      <h3>Main page</h3>
      <AddUsers />
      <DisplayUsers />
    </main>
  )
}
