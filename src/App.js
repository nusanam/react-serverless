import './App.css';
import React, { useState } from 'react';

function App() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [show, setShow] = useState(true);
	const [creds, setCreds] = useState({ username: '', password: '' });

	const handlePassword = () => {
		setShow(!show);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const post = {
			method: 'POST',
			body: JSON.stringify({ creds }),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			setCreds({ username, password });
			await fetch('https://example.org/post', post);
		} catch (e) {
			console.log(`Errored when submitting credentials ${e}`);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label
				className='description'
				htmlFor='username-input'>
				Username:
			</label>
			<input
				type='type'
				name='username-input'
				className='input'
				value={username}
				placeholder='Type username here...'
				onChange={e => setUsername(e.target.value)}
			/>
			<br />
			<br />
			<label
				className='description'
				htmlFor='password-input'>
				Password:
			</label>
			<input
				type={show ? 'password' : 'text'}
				name='password'
				className='input'
				value={password}
				placeholder='Enter password here'
				onChange={e => setPassword(e.target.value)}
			/>
			<br />
			<label htmlFor='password-input'>Show password</label>
			<input
				className='checkbox'
				type='checkbox'
				checked={!show}
				onChange={handlePassword}
			/>
			<button>log in</button>
		</form>
	);
}

export default App;
