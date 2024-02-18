export function Inputbox({label,placeholder,onChange,type}){
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input type={type} onChange={onChange} placeholder={placeholder} className="w-full py-2 px-2 border rounded border-slate-200 hover:border-black-500"></input>
    </div>
}