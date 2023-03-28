export interface IuserModel {
    firstName: string,
    lastName: string,
    fullName: string,
    dob: Date,
    gender: Number,
    roleId: Number,
    phone: string,
    email: string,
    address: Iaddress,
    id: number,
    userName: string,
    password: string

}

export interface Iaddress {
    city: string,
    country: string,
    pincode: string,
    state: string,
    street: string,
}