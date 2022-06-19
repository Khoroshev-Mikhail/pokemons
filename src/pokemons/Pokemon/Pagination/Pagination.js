import { useDispatch } from "react-redux";
import { nextPage_AC, prevPage_AC } from "../../store/store";


export default function Pagination(props){
    const dispatch = useDispatch()

    function prevPage() {
        dispatch(prevPage_AC())
    }

    function nextPage() {
        dispatch(nextPage_AC())
    }

    return (
        <div>
            <h2 className='header__topH2'>Страница: {props.currentPage}</h2>
            <button disabled={props.currentPage === 1} onClick={prevPage}>Назад</button>
            <button onClick={nextPage}>Вперед</button>
        </div>
    )
}