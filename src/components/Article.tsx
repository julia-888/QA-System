import { articles } from "../dataForArticles";



export default function Article({id}: {id: number}) {
    return (
        <div>
            <div>Hello, World!!!</div>
            <h1>{id}</h1>

        </div>
        
    );
}