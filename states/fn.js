
const fn = store => ({
    increment: state => ({ count: state.count + 1 }),
    decrement: state => ({ count: state.count - 1 }),
    auth: state => ({})
});

export default fn;
