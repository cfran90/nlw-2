import React, {TextareaHTMLAttributes} from "react";

import "./style.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({name, label, ...rest}) => {
    // ...rest permite qualquer atributo do Textarea padrão. Não precisa ser passado
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea;