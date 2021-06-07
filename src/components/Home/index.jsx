import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { VStack, Spacer, Input, Button } from "@chakra-ui/react";
import "./Home.scss";
import NavBar from "../NavBar";

const Home = () => {
	const history = useHistory();
	const [url, setUrl] = useState("");

	const handleChange = (e) => {
		setUrl(e.target.value);
	};

	const join = () => {
		let tempUrl = "";
		if (url !== "") {
			tempUrl = url.trim();
		} else {
			tempUrl = Math.random().toString(36).substring(2, 7);
		}
		history.push(`/${tempUrl}`);
	};

	return (
		<div className="home_page__container">
			<NavBar />
			<VStack>
				<h1 className="home_page__heading">
					Connect &amp; Collaborate,
				</h1>
				<h1 className="home_page__heading">without friction.</h1>
				<p className="home_page__sub-heading">
					Go anonymous, Go incogly.
				</p>
				<img src="/images/code-image.png" alt="Code" />
				<Spacer />

				<div className="home_page__url_container">
					<VStack>
						<p className="home_page__text">
							Start or join a meeting
						</p>
						<Input
							className="home_page__input_box"
							placeholder="URL"
							onChange={(e) => handleChange(e)}
						/>
						<Spacer />
						<Button
							className="home_page__join_button"
							variant="contained"
							onClick={join}
						>
							Start Collaborating
						</Button>
					</VStack>
				</div>
			</VStack>
		</div>
	);
};

export default Home;