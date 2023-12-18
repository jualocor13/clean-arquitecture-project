export class UserPasswordValueObject  {
    readonly password: string;

	constructor(value: string) {
		this.password = value;
	}

    itsEquals(pass : UserPasswordValueObject) {
        return this.password === pass.password
    }

}