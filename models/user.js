import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt-nodejs';
import { ROLE_MEMBER, ROLE_ADMIN } from './../controllers/user/constants';

const UserSchema = new Schema(
    {
        local: {
            email        : String,
            password     : String,
            firstName    : String,
            lastName     : String,
            resetPasswordToken: { type: String },
            resetPasswordExpires: { type: Date }
        },
        google: {
            id           : String,
            token        : String,
            email        : String,
            name         : String
        },
        facebook: {
            id           : String,
            token        : String,
            email        : String,
            name         : String
        },
        github: {
            id           : String,
            username     : String,
            displayName  : String
        },
        twitter: {
            id           : String,
            token        : String,
            displayName  : String
        },
        role: {
            type: String,
            enum: [ROLE_MEMBER, ROLE_ADMIN],
            default: ROLE_MEMBER
        }
    },
    {
        timestamps: true
    }
);

UserSchema.methods.generateHash = (password, next) => {
    bcrypt.genSalt(8, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(password, salt, null, (err, hash) => {
            if (err) return next(err);
            next(null, hash);
        });
    });
};

UserSchema.methods.comparePassword = (password, foundHash, next) => {
    bcrypt.compare(password, foundHash, (err, isMatch) => {
        if (err) {
            return next(err);
        }
        next(null, isMatch);
    });
};

export default mongoose.model('User', UserSchema);