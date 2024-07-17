const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/quizdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// User schema and model
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// Quiz schema and model
const QuizSchema = new mongoose.Schema({
  questions: [
    {
      question: String,
      answers: [
        { text: String, correct: Boolean },
      ],
    },
  ],
});

const Quiz = mongoose.model('Quiz', QuizSchema);

// User registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.status(201).send('User registered');
});

// User login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ userId: user._id }, 'secret');
    res.json({ token });
  } else {
    res.status(400).send('Invalid credentials');
  }
});

// Middleware for authenticating JWT tokens
const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, 'secret');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
};

// Create a quiz
app.post('/quizzes', auth, async (req, res) => {
  const quiz = new Quiz(req.body);
  await quiz.save();
  res.status(201).send('Quiz created');
});

// Get quizzes
app.get('/quizzes', auth, async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
