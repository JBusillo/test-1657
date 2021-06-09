
import { SignJWT } from 'jose/dist/node/cjs/jwt/sign'
import * as crypto from 'crypto';

export const get = async (request) => {

	const buf = Buffer.from(
		'8f881f5bdb0c0899bfed2dc4e3fc8d03dad54b2eae1839295e928b7c34be14cd',
		'hex'
	);
	const key = crypto.createSecretKey(buf);
	const jwt = await new SignJWT({ a: 1 })
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.sign(key);

	// console.log(jwt)		

    return {
        body: {
            jwt: jwt
        }
    };

	
};

