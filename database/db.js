const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://dyash376:oYVBuMlsEvzcOJCQ@task-manager.7i5yj8v.mongodb.net/?retryWrites=true&w=majority&appName=task-manager';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
