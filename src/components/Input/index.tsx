import React, {InputHTMLAttributes} from "react";

import "./style.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({name, label, ...rest}) => {
    // ...rest permite qualquer atributo do input padrão. Não precisa ser passado
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;