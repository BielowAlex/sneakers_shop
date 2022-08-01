 const createID = () => {
    return (~~(Math.random() * 1e8)).toString(16)
}

export {
    createID
}