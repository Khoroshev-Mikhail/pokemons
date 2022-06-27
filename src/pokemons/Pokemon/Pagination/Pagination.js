import { useDispatch } from "react-redux";
import { nextPage, prevPage } from "../../store/toolkitStore";


export default function Pagination(props){
    //Вариант 3
    const dispatch = useDispatch()

    function prev() {
        dispatch(prevPage())
    }

    function next() {
        dispatch(nextPage())
    }

    return (
        <div>
            <h2 className='header__topH2'>Страница: {props.currentPage}</h2>
            <button disabled={props.currentPage === 1} onClick={prev}>Назад</button>
            <button onClick={next}>Вперед</button>
        </div>
    )
}