export const getUser = () => ({
    type: 'GETUSER',
})

export const addUsers = (newUser) => ({
    type: 'ADDUSER',
    newUser
})

export const deleteUsers = (idUser) => ({
    type: 'DELETEUSERS',
    idUser
})

export const editUser = (idUser, updatedUser) => ({
    type: 'EDITUSER',
    idUser,
    updatedUser

})