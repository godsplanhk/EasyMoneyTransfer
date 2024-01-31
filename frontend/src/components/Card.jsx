export function Card(props){
    return <div className="justify-center border-2 rounded hover:border-4 hover:rounder-lg  m-4 p-4">
        {props.children}
    </div>
}