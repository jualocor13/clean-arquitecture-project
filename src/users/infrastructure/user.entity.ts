const UserSchema = {
		email: {
			type: String,
			required: true,
			pattern:
				"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
			unique: true,
			trim: true,
			lowercase: true,
		},
		name: {
			type: String,
			trim: true,
			minLength: 2,
			maxLength: 100,
		},
		password: {
			type: String,
            pattern: "/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/",
			trim: true,
            minLength: 8,
			required: true,
		},
		_id: {
			type: Number,
		},
	}