import React, {FC} from 'react';
type PropsType = {
    text: string,
    setText: (text: string) => void,
    addTodo: () => void
}
const InputField: FC<PropsType> = ({addTodo, setText, text}) => {
    return (
        <label htmlFor="">
            <input value={text} onChange={(e ) => setText(e.currentTarget.value)}/>
            <button onClick={addTodo}>Add</button>
        </label>
    );
};

export default InputField;