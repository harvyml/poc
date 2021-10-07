import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Title, Divider, CustomDiv } from '../components/CustomStyling';
import { isLoggedIn, onSignin } from '../utils/services';

export default function Signin() {
	useEffect(() => isLoggedIn(), [])
	return (
		<Container>
			<Divider height='2px' margin='20px auto' background='white' />
			<Title textAlign='center' fontSize='1.8rem'>Sign in</Title>
			<Divider height='2px' margin='20px auto' background='white' />
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						onSignin(values)
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<Form onSubmit={handleSubmit}>
						<CustomDiv background='white' width='60%' margin='auto'>
							<Container>
								<Form.Group
									type="email"
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
								>
									<Form.Control placeholder='Email' name='email' />
								</Form.Group>
								<Divider height='2px' margin='5px auto' background='white' />
								<Form.Group
									type="password"
									name="password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
								>
									<Form.Control placeholder='Password' name='password' />
								</Form.Group>
								<Divider height='2px' margin='10px auto' background='white' />
								<Button type="submit" disabled={isSubmitting}>
									Submit
								</Button>
							</Container>
						</CustomDiv>
					</Form>
				)}
			</Formik>
		</Container>
	)
};