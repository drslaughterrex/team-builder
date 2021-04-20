import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TeamForm from "./Form";

const initialFormValues = {
	username: "",
	email: "",
	role: "",
};

function Member({ details }) {
	if (!details) {
		return <h3>Fetching your team...</h3>;
	}
	return (
		<div className="member container">
			<h2>{details.username}</h2>
			<p>Email {details.email}</p>
			<p>Role: {details.role}</p>
		</div>
	);
}

function App() {
	const [members, setMembers] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);

	const updateForm = (inputName, inputValue) => {
		setFormValues({
			...formValues,
			[inputName]: inputValue,
		});
	};

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    setMembers(members.concat(newMember));
    setFormValues(initialFormValues);
  }

	return (
		<div className="Team Member Form">
      <TeamForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {members.map((member) => {
        return <Member key={member.id} detail={member} />
      })}

		</div>
	);
}

export default App;
