export function Input({props,placeholder}) {
    return(<div>
        <div className="text-base font-medium text-left py-2">
            {props}
        </div>
        <input placeholder="{placeholder" className="w-full h-10 px-3 text-base placeholder-gray-400 border rounded-lg focus:shadow-outline" type="text" />
    </div>)
}