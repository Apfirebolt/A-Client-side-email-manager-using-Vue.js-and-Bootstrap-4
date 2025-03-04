import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  return token
};

export default generateToken;
