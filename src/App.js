import { useEffect, useState } from 'react';
import './App.css';

import Search from './Search';
import TableWrapper from './TableWrapper';
import Details from './Details';


const UsersUrl = "https://63e8e327b120461c6be742f0.mockapi.io/data"


function App() {

  const [ list, setList] = useState([])
  const [ detail, setDetail] = useState(null)
 

  useEffect(() => {
    getUser(UsersUrl)
  },[])
  
const getUser = async (url) => {

  const response = await fetch(url)
  const data = await response.json()
  
  setList(data)
}


return (

  <main>
    <div className='table-section'>
      <Search setList={setList} list={list} />
      <TableWrapper users={list} setDetail={setDetail} detail={detail}/>
    </div>
    <Details detail={detail}/>
  </main>
)

}


export default App;
