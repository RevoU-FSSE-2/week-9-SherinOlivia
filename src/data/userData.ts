interface IUser {
    userId: number,
    userName: string,
    userRole: string,
    userAddress: string,
    password: string,
}

export let users:IUser[] = [
    {
        userId: 1,
        userName: "User",
        userRole: "user",
        userAddress: "Jakarta",
        password: "thisisUser",
    },
    {
        userId: 2,
        userName: "Guest",
        userRole: "guest",
        userAddress: "",
        password: "thisisGuest",
    },
    {
        userId: 2,
        userName: "Administrator",
        userRole: "admin",
        userAddress: "Bali",
        password: "thisisAdmin",
    },
]