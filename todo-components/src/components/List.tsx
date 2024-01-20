interface ListProps {
    items: Array<string>;
}

const List = (prop: ListProps) => {

    const {items} = prop;

    return (
        <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    );
};

export default List;