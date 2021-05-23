import { useContext } from 'react'
import Context from '../../GlobalState/Context'


const MainPage = () => {

    const { states, setters, requests } = useContext(Context)

    

    return (
        <div>
            Teste
        </div>
    )
}

export default MainPage