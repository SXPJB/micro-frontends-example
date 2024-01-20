interface InputProps {
    value: any;
    onChange: any;
    onSubmit: () => void;
}

const Input = (props: InputProps) => {

    const {value, onChange, onSubmit} = props;

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit();
            }}
        >
            <div className='flex-row'>
                <input
                    type="text"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                />
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default Input;