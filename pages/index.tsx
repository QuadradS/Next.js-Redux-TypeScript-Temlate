import React from 'react'
import Header from "../components/header";
import Container from "../components/container";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../store/main-store/actions";
import {RootStore} from "../store/configureStore";

const Index = () => {
    const dispatch = useDispatch()
    const {mainStore: {count}} = useSelector((state: RootStore) => state)

    const handleIncrement  = () => dispatch(decrement(1))
    const handleDecrement = () => dispatch(increment(1))

    return (
        <div>
            <Header title={'Template'}/>

            <Container>
                <button onClick={handleIncrement}>-</button>
                {count}
                <button onClick={handleDecrement}>+</button>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur cupiditate
                    delectus
                    doloribus enim eos eveniet fugit laudantium maiores, natus, nihil numquam, obcaecati odio quas qui
                    repellendus reprehenderit rerum sed!
                </p>
            </Container>
        </div>
    )
}


export default Index
